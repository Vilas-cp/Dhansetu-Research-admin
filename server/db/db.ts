import chalk from "chalk";
import { Pool, PoolClient } from "pg";
import { v4 } from "uuid";
import { Ping } from "../types/db";
import {
  AdminUser,
  ClientUser,
  Notification,
} from "../types/user";
import { dbConfigs, serverConfigs } from "../configs/configs";
import ShortUniqueId from "short-unique-id";
// import { interviewNotification } from "../helpers/notifications";
import { waitForNSeconds } from "../helpers/wait";
import { randNum } from "../helpers/random";
import { genArtId } from "../helpers/stringsFun";
import { Article } from "../types/articles";

// Macros
const {
  DB_LIMIT_ROWS,
  DB_RETRY_QUERY,
  DB_RETRY_WAIT_MAX_SEC,
  DB_RETRY_WAIT_MIN_SEC,
} = dbConfigs;
const { SESSION_EXPIRE_TIME_IN_DAYS } = serverConfigs;
const shortUUID = new ShortUniqueId({ length: 10 });
const USER_ARTICLE_OFFSET = 10;

class DB {
  private static client: Pool;
  constructor(connectionString: string);
  constructor();
  constructor(connectionString?: string) {
    if (DB.client) {
      return;
    }
    if (!connectionString) {
      console.log(chalk.red(`Initially need Connection String to connect!`));
      return;
    }
    DB.client = new Pool({
      connectionString: connectionString,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
    DB.client.on("connect", (pClient) => {
      pClient.on("error", (err: any) => {
        console.log(chalk.red("PostgresSQL Error: "), err?.message);
      });
    });
    DB.client.on("error", (err: any) => {
      console.log(chalk.red("PostgresSQL Error: "), err?.message);
    });
  }
  async end() {
    await DB.client.end();
  }
  async ping() {
    return await this.retryQuery("ping", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(`
          SELECT 'Hello from PostgresSQL' as pong;`);
        if (res.rowCount !== 1) {
          return -1;
        }
        const ping: Ping = res.rows[0];
        return ping;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  totalClientCounts() {
    console.log(chalk.cyan("Idle clients: ", DB.client.idleCount));
    console.log(chalk.cyan("Total clients: ", DB.client.totalCount));
  }
  protected async connect() {
    const pClient = await DB.client.connect();
    return pClient;
  }
  protected release(pClient: PoolClient) {
    pClient.release();
  }
  protected releaseWithDestroy(pClient: PoolClient) {
    pClient.release(true);
  }
  protected getDBInstance() {
    return DB.client;
  }
  protected async retryQuery<T>(
    queryName: string,
    queryFunction: () => T,
    retryTimes: number = DB_RETRY_QUERY
  ) {
    try {
      for (let i = 0; i < retryTimes; i++) {
        const queryRes = await queryFunction();
        if (queryRes !== null && queryRes !== undefined) {
          return queryRes;
        }
        await waitForNSeconds(
          randNum(DB_RETRY_WAIT_MIN_SEC, DB_RETRY_WAIT_MAX_SEC)
        );
      }
      console.log(
        chalk.red(
          `Failed query ${queryName} for retries of ${retryTimes} times`
        )
      );
      return null;
    } catch (error: any) {
      console.log(
        chalk.red("PostgresSQL Error: "),
        error?.message,
        error?.code
      );
      return null;
    }
  }
}
class UserDB extends DB {
  async getClientUser(emailId: string) {
    return await this.retryQuery("getClientUser", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
          SELECT u."id", u."uuid", u."email_id" as "emailId",
          u."clerk_id" as "clerkId", u."first_name" as "firstName", 
          u."last_name" as "lastName", u."img_URL" as "imgURL", 
          u."type", u."created_at" as "createdAt"
          FROM 
            "users" as u 
          WHERE
            u."email_id" = $1::varchar;`,
          [emailId]
        );
        if (res.rowCount !== 1) {
          return -1;
        }
        const adminData: ClientUser = res.rows[0];
        return adminData;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async createClientUser(
    emailId: string,
    clerkId: string,
    firstName: string,
    lastName: string,
    imgURL: string,
    type: string
  ) {
    return await this.retryQuery("createClientUser", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
          INSERT INTO
            "users" ("email_id", "clerk_id", "first_name", "last_name", "img_URL", "type")
          VALUES
            ($1::varchar, $2::varchar, $3::varchar, $4::varchar, $5::varchar, $6::user_type)
          RETURNING "id";
            `,
          [emailId, clerkId, firstName, lastName, imgURL, type]
        );
        if (res.rowCount !== 1) {
          return -1;
        }
        const userData: { id: number } = res.rows[0];
        return userData;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async getAllArticles(offset = 1) {
    return await this.retryQuery("getAllArticles", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          SELECT art."admin_id" as "adminId", art."article_id" as "artId", 
            art."article_heading" as "artHeading", 
            art."cover_img_URL" as "coverImgURL", art."article_type" as "artType",
            art."id", art."uuid", ad."user_name" as "adUserName", ad."first_name" as "adFirstName",
            ad."last_name" as "adLastName", ad."img_URL" as "adImgURL", ad."id" as "adId", ad."uuid" as "aduuid"
          FROM 
            "articles" as "art"
          LEFT JOIN 
            "admin" as ad ON art."admin_id" = ad."id"
          LIMIT $1::int
          OFFSET $2::int;`,
          [USER_ARTICLE_OFFSET, offset]
        );
        const allArt: Article[] = res.rows;
        await pClient.query("COMMIT");
        return allArt;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async getArticle(artId: string, lang: string = "en") {
    return await this.retryQuery("getAllArticles", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          SELECT art."admin_id" as "adminId", art."article_id" as "artId", 
            art."article_heading" as "artHeading", artd."article_lang" as "artLang", 
            artd."article_detail" as "artDetail", art."cover_img_URL" as "coverImgURL", 
            art."article_type" as "artType", art."id", art."uuid", ad."user_name" as "adUserName", 
            ad."first_name" as "adFirstName", ad."last_name" as "adLastName", 
            ad."img_URL" as "adImgURL", ad."id" as "adId", ad."uuid" as "aduuid"
          FROM 
            "articles" as "art"
          LEFT JOIN 
            "admin" as ad ON art."admin_id" = ad."id"
          LEFT JOIN 
            "articles_details" as artd ON art."id" = artd."article_id"
          WHERE
            art."article_id" = $1::varchar AND artd."article_lang" = $2::lang;`,
          [artId, lang]
        );
        if (res.rowCount === 0) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const art: Article = res.rows[0];
        await pClient.query("COMMIT");
        return art;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
}

class SessionDB extends DB {
  async getSessionId(userName: string) {
    return await this.retryQuery("getSessionId", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
           SELECT "session_id" FROM "sessions" WHERE
           "user_name" = $1::varchar
           AND "created_at" >= CURRENT_TIMESTAMP - INTERVAL '${SESSION_EXPIRE_TIME_IN_DAYS} days';`,
          [userName]
        );
        if (res.rowCount !== 1) {
          return -1;
        }
        const sessionId: string = res.rows[0].session_id;
        return sessionId;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async createSessionId(userName: string, sessionId: string) {
    return await this.retryQuery("createSessionId", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
            INSERT INTO "sessions" ("user_name","session_id") 
            VALUES ($1::varchar, $2::uuid) RETURNING "session_id";`,
          [userName, sessionId]
        );
        if (res.rowCount !== 1) {
          return -1;
        }
        return sessionId;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
}

class AdminDb extends DB {
  async getAdminUser(userName: string) {
    return await this.retryQuery("getAdminUser", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
          SELECT ad."user_name" as "userName", ad."first_name" as "firstName",
          ad."last_name" as "lastName", ad."img_URL" as "imgURL", ad."id", ad."uuid"
          FROM 
            "admin" as ad 
          WHERE
            ad."user_name" = $1::varchar;`,
          [userName]
        );
        if (res.rowCount !== 1) {
          return -1;
        }
        const adminData: AdminUser = res.rows[0];
        return adminData;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async createAdminUser(
    firstName: string,
    lastName: string,
    userName: string,
    imgURL: string
  ) {
    return await this.retryQuery("createAdminUser", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          INSERT INTO 
            "admin" ("user_name", "first_name", "last_name", "img_URL")
          VALUES
            ($1::varchar, $2::varchar, $3::varchar, $4::varchar)
          RETURNING "id";`,
          [userName, firstName, lastName, imgURL]
        );
        if (res.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const updateData: { id: number } = res.rows[0];
        await pClient.query("COMMIT");
        return updateData;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async createArticle(
    artHeading: string,
    artDetail: string,
    artCoverImg: string,
    userName: string,
    artType: string,
    lang: string = "en"
  ) {
    return await this.retryQuery("createArticle", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const resAdmin = await this.getAdminUser(userName);
        if (resAdmin == -1 || resAdmin == null) {
          await pClient.query("ROLLBACK");
          return resAdmin;
        }
        const artId = genArtId(artHeading);
        const resCheck = await pClient.query(
          `
          SELECT art."id"
          FROM 
            "articles" as "art"
          WHERE
            art."article_id" = $1::varchar;
        `,
          [artId]
        );
        if (resCheck.rowCount === 1) {
          await pClient.query("ROLLBACK");
          return -2;
        }
        const res = await pClient.query(
          `
          INSERT INTO 
            "articles" ("admin_id", "article_id", "article_heading", "cover_img_URL", "article_type")
          VALUES
            ($1::int, $2::varchar, $3::varchar, $4::varchar, $5::user_type)
          RETURNING "id", "article_id" as "articleId";`,
          [resAdmin.id, artId, artHeading, artCoverImg, artType]
        );
        if (res.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const updateData: { id: number } = res.rows[0];
        const resDtl = await pClient.query(
          `
          INSERT INTO 
            "articles_details" ("article_id", "article_lang", "article_detail")
          VALUES
            ($1::int, $2::lang, $3::text)
          RETURNING "id", "article_id" as "articleId";`,
          [updateData.id, lang, artDetail]
        );
        if (resDtl.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        await pClient.query("COMMIT");
        return updateData;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async getAllArticles() {
    return await this.retryQuery("getAllArticles", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          SELECT art."admin_id" as "adminId", art."article_id" as "artId", 
            art."article_heading" as "artHeading", 
            art."cover_img_URL" as "coverImgURL", art."article_type" as "artType",
            art."id", art."uuid", ad."user_name" as "adUserName", ad."first_name" as "adFirstName",
            ad."last_name" as "adLastName", ad."img_URL" as "adImgURL", ad."id" as "adId", ad."uuid" as "aduuid"
          FROM 
            "articles" as "art"
          LEFT JOIN 
            "admin" as ad ON art."admin_id" = ad."id";`
        );
        const allArt: Article[] = res.rows;
        await pClient.query("COMMIT");
        return allArt;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async getArticle(artId: string, lang: string = "en") {
    return await this.retryQuery("getAllArticles", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          SELECT art."admin_id" as "adminId", art."article_id" as "artId", 
            art."article_heading" as "artHeading", artd."article_lang" as "artLang", 
            artd."article_detail" as "artDetail", art."cover_img_URL" as "coverImgURL", 
            art."article_type" as "artType", art."id", art."uuid", ad."user_name" as "adUserName", 
            ad."first_name" as "adFirstName", ad."last_name" as "adLastName", 
            ad."img_URL" as "adImgURL", ad."id" as "adId", ad."uuid" as "aduuid"
          FROM 
            "articles" as "art"
          LEFT JOIN 
            "admin" as ad ON art."admin_id" = ad."id"
          LEFT JOIN 
            "articles_details" as artd ON art."id" = artd."article_id"
          WHERE
            art."article_id" = $1::varchar AND artd."article_lang" = $2::lang;`,
          [artId, lang]
        );
        if (res.rowCount === 0) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const art: Article = res.rows[0];
        await pClient.query("COMMIT");
        return art;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async deleteArticle(artId: string) {
    return await this.retryQuery("getAllArticles", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          DELETE FROM 
            "articles" as "art"
          WHERE
            art."article_id" = $1::varchar
          RETURNING *;`,
          [artId]
        );
        if (res.rowCount === 0) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const art: Article = res.rows[0];
        await pClient.query("COMMIT");
        return art;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
  async updateArticle(
    artHeading: string,
    artDetail: string,
    artCoverImg: string,
    userName: string,
    artType: string,
    artId: string,
    lang: string = "en"
  ) {
    return await this.retryQuery("updateArticle", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const resAdmin = await this.getAdminUser(userName);
        if (resAdmin == -1 || resAdmin == null) {
          await pClient.query("ROLLBACK");
          return resAdmin;
        }
        const resCheck = await pClient.query(
          `
          SELECT art."id"
          FROM 
            "articles" as "art"
          WHERE
            art."article_id" = $1::varchar;
        `,
          [artId]
        );
        if (resCheck.rowCount === 0) {
          await pClient.query("ROLLBACK");
          return -2;
        }
        const res = await pClient.query(
          `
          UPDATE
            "articles"
          SET
            "article_heading" = $2::varchar,
            "cover_img_URL" = $3::varchar, "article_type" = $4::user_type
          WHERE
            "article_id" = $1::varchar AND "admin_id" = $5::int
          RETURNING "id";`,
          [artId, artHeading, artCoverImg, artType, resAdmin.id]
        );
        if (res.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const updateData: { id: number } = res.rows[0];
        const resDtl = await pClient.query(
          `
          UPDATE
            "articles_details"
          SET
            "article_detail" = $1::text
          WHERE
            "article_id" = $2::int AND "article_lang" = $3::lang
          RETURNING "id";`,
          [artDetail, updateData.id, lang]
        );
        if (resDtl.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        await pClient.query("COMMIT");
        return updateData;
      } catch (error: any) {
        console.log(
          chalk.red("PostgresSQL Error: "),
          error?.message,
          error?.code
        );
        if (pClient) {
          await pClient.query("ROLLBACK");
        }
        return null;
      } finally {
        if (pClient) {
          this.release(pClient);
        }
      }
    });
  }
}

export { DB, UserDB, SessionDB, AdminDb };
