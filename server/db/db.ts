import chalk from "chalk";
import { Pool, PoolClient } from "pg";
import { v4 } from "uuid";
import { Ping } from "../types/db";
import {
  CandidateProfile,
  GetCandidateProfile,
  GetRecruiterProfile,
  Notification,
} from "../types/user";
import { dbConfigs, serverConfigs } from "../configs/configs";
import ShortUniqueId from "short-unique-id";
// import { interviewNotification } from "../helpers/notifications";
import { waitForNSeconds } from "../helpers/wait";
import { randNum } from "../helpers/random";

// Macros
const {
  DB_LIMIT_ROWS,
  DB_RETRY_QUERY,
  DB_RETRY_WAIT_MAX_SEC,
  DB_RETRY_WAIT_MIN_SEC,
} = dbConfigs;
const { BUCKET_NAME_IMG } = serverConfigs;
const shortUUID = new ShortUniqueId({ length: 10 });

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
class UserDBv1 extends DB {
  async getIdByClerkUserId(clerkUserId: string) {
    return await this.retryQuery("getIdByClerkUserId", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
          SELECT u."id", u."type", u."user_name", cm."resume_key", 
          rm."approve_status"
          FROM "users" AS u
          LEFT JOIN "candidate_metadata_v1" AS cm
          ON u."id" = cm."user_id"
          LEFT JOIN "recruiter_metadata_v1" AS rm
          ON u."id" = rm."user_id"
          WHERE
          u."clerk_id" = $1::varchar;`,
          [clerkUserId]
        );
        if (res.rowCount !== 1) {
          return -1;
        }
        const userData = {
          primaryId: res.rows[0].id as number,
          userType: res.rows[0].type as string,
          userName: res.rows[0]["user_name"] as string,
          resumeKey: res.rows[0]["resume_key"] as string | null,
          approveStatus: res.rows[0]["approve_status"] as string | null,
        };
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
  // Candidate User
  async createUserCandidate(
    profileData: CandidateProfile,
    userId: string,
    emailId: string | null,
    userName: string,
    imgFileName: string,
    resumeFileName: string
  ) {
    return await this.retryQuery("createUserCandidate", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          INSERT INTO "users" ("user_name", "clerk_id", "first_name",
          "last_name", "img_URL", "type") VALUES ($1::varchar, $2::varchar,
          $3::varchar, $4::varchar, $5::varchar, $6::user_type) RETURNING id;`,
          [
            userName,
            userId,
            profileData.firstName,
            profileData.lastName,
            `https://${BUCKET_NAME_IMG}.s3.amazonaws.com/${imgFileName}`,
            "candidate",
          ]
        );
        if (res.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const primaryId: number = res.rows[0].id;
        const resMetadata = await pClient.query(
          `
          INSERT INTO "candidate_metadata_v1" ("user_id", "linkedin_URL", "resume_URL",
          "phone_number", "profile_note", "job_title", "resume_key") VALUES 
          ($1::int, $2::varchar, $3::varchar, $4::varchar, 
          $5::text, $6::varchar, $7::varchar) RETURNING id;`,
          [
            primaryId,
            profileData.linkedinURL,
            `/file/v1/download/resume/${resumeFileName}`,
            profileData.phoneNumber,
            profileData.profileNote,
            profileData.jobTitle,
            resumeFileName,
          ]
        );
        if (resMetadata.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const resContact1 = await pClient.query(
          `
          INSERT INTO "users_contact_details_v1" ("user_id", "contact_type", "contact_detail")
          VALUES ($1::int, $2::contact_type, $3::varchar) RETURNING id;`,
          [primaryId, "phone no", profileData.phoneNumber]
        );
        if (resContact1.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const resContact2 = await pClient.query(
          `
          INSERT INTO "users_contact_details_v1" ("user_id", "contact_type", "contact_detail")
          VALUES ($1::int, $2::contact_type, $3::varchar) RETURNING id;`,
          [primaryId, "linkedin", profileData.linkedinURL]
        );
        if (resContact2.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const resContact3 = await pClient.query(
          `
          INSERT INTO "users_contact_details_v1" ("user_id", "contact_type", "contact_detail")
          VALUES ($1::int, $2::contact_type, $3::varchar) RETURNING id;`,
          [primaryId, "email id", emailId]
        );
        if (resContact3.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        await pClient.query("COMMIT");
        const userData = {
          primaryId,
        };
        return userData;
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
  async updateUserCandidate(
    profileData: CandidateProfile,
    userId: string,
    userType: string
  ) {
    return await this.retryQuery("updateUserCandidate", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        let allowUpdate = false;
        if (userType === "recruiter") {
          // allow any candidate profile update by 'recruiter'
          allowUpdate = true;
        }
        const res = await pClient.query(
          `
          UPDATE "users" 
          SET 
          "first_name" = $2::varchar,
          "last_name" = $3::varchar
          WHERE "user_name" = $1::varchar AND ("clerk_id" = $4::varchar OR $5::boolean)
          RETURNING id;`,
          [
            profileData.userName,
            profileData.firstName,
            profileData.lastName,
            userId,
            allowUpdate,
          ]
        );
        if (res.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const primaryId: number = res.rows[0].id;
        const resMetadata = await pClient.query(
          `
          UPDATE 
          "candidate_metadata_v1" 
          SET
          "linkedin_URL" = $1::varchar,
          "phone_number" = $2::varchar, 
          "profile_note" = $3::varchar, 
          "job_title" = $4::varchar 
          WHERE "user_id" = $5::int
          RETURNING id;`,
          [
            profileData.linkedinURL,
            profileData.phoneNumber,
            profileData.profileNote,
            profileData.jobTitle,
            primaryId,
          ]
        );
        if (resMetadata.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const resContact1 = await pClient.query(
          `
          UPDATE 
          "users_contact_details_v1" 
          SET "contact_detail" = $3::varchar
          WHERE "user_id" = $1::int AND "contact_type" = $2::contact_type
          RETURNING id;`,
          [primaryId, "phone no", profileData.phoneNumber]
        );
        if (resContact1.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const resContact2 = await pClient.query(
          `
          UPDATE 
          "users_contact_details_v1" 
          SET "contact_detail" = $3::varchar
          WHERE "user_id" = $1::int AND "contact_type" = $2::contact_type
          RETURNING id;`,
          [primaryId, "linkedin", profileData.linkedinURL]
        );
        if (resContact2.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        await pClient.query("COMMIT");
        const userData = {
          primaryId,
        };
        return userData;
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
  async deleteUserCandidate(
    profileData: { userName: string },
    userId: string,
    userType: string
  ) {
    return await this.retryQuery("deleteUserCandidate", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        let allowUpdate = false;
        if (userType === "recruiter") {
          // allow any candidate profile delete by 'recruiter'
          allowUpdate = true;
        }
        const res = await pClient.query(
          `
          DELETE FROM "users" 
          WHERE "user_name" = $1::varchar AND ("clerk_id" = $2::varchar OR $3::boolean)
          RETURNING id;`,
          [profileData.userName, userId, allowUpdate]
        );
        if (res.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return -1;
        }
        const primaryId: number = res.rows[0].id;
        await pClient.query("COMMIT");
        const userData = {
          primaryId,
        };
        return userData;
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
  async getUserCandidate(userName: string, userId: string) {
    return await this.retryQuery("getUserCandidate", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
          SELECT u."id", u."user_name" as "userName",
          u."first_name" as "firstName", u."last_name" as "lastName", u."img_URL" as "imgURL",
          u."type", u."created_at" as "createdAt", cm."linkedin_URL" as "linkedinURL", 
          cm."phone_number" as "phoneNumber", cm."resume_URL" as "resumeURL", cm."job_title" as "jobTitle",
          cm."profile_note" as "profileNote", cm."candidate_star" as "candidateStar",
          CASE WHEN u."id" IN (SELECT "candidate_id" FROM "interview_v1") OR cm."candidate_star" IS NOT NULL THEN FALSE ELSE TRUE
          END as "setInterview", CASE WHEN u."id" IN (SELECT "candidate_id" FROM "interview_v1") AND cm."candidate_star" IS NULL THEN TRUE ELSE FALSE
          END as "scheduled", 'Active' as "status", floor(random() * 10 + 1)::varchar as "workExperience",
          CASE WHEN u."clerk_id" = $2::varchar THEN TRUE ELSE FALSE
          END as "edit",
          CASE WHEN u."clerk_id" = $2::varchar THEN TRUE ELSE FALSE
          END as "canSignOut" 
          FROM "users" as u 
          INNER JOIN 
          "candidate_metadata_v1" as cm ON u."id" = cm."user_id"
          WHERE u."user_name" = $1::varchar AND u."type" = $3::user_type;`,
          [userName, userId, "candidate"]
        );
        if (res.rowCount !== 1) {
          return -1;
        }
        const profileData: GetCandidateProfile = res.rows[0];
        return profileData;
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
  async getNotificationsCandidate(clerkUserId: string) {
    return await this.retryQuery("getNotificationsCandidate", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
          SELECT n."id", n."message", n."action", n."seen", n."timestamp"
          FROM 
            "notifications_v1" as n  
          INNER JOIN 
            "users" as u
          ON n."user_id" = u."id"
          WHERE 
            u."clerk_id" = $1::varchar AND u."type" = 'candidate'
          ORDER BY 
            n."timestamp" DESC
          LIMIT 15`,
          [clerkUserId]
        );
        const candidateNotifications: Notification[] = res.rows;
        return candidateNotifications;
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
  async updateNotificationCandidate(
    notificationId: number,
    clerkUserId: string
  ) {
    return await this.retryQuery("updateNotificationCandidate", async () => {
      let pClient;
      try {
        pClient = await this.connect();

        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          UPDATE "notifications_v1" as n
          SET 
            n."seen" = TRUE
          FROM 
            "users" as u
          WHERE 
            u."clerk_id" = $1::varchar AND 
            u."type" = 'candidate' AND n."id" = $2::int
            AND n."user_id" = u."id" AND n."seen" = FALSE
          RETURNING n."id"`,
          [clerkUserId, notificationId]
        );
        if (res.rowCount !== 1) {
          await pClient.query("ROLLBACK");
          return false;
        }
        await pClient.query("COMMIT");
        return true;
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
           "user_name" = $1::varchar;`,
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

class AdminDbv1 extends DB {
  async getRecruiterUsers() {
    return await this.retryQuery("getRecruiterUsers", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        const res = await pClient.query(
          `
          SELECT u."id", u."user_name" as "userName",
          u."first_name" as "firstName", u."last_name" as "lastName", u."img_URL" as "imgURL",
          u."type", u."created_at" as "createdAt", rm."company_name" as "companyName", 
          rm."company_web_address" as "companyWebAddress", rm."phone_number" as "phoneNumber", 
          rm."company_email" as "companyEmail", rm."industry", rm."company_size" as "companySize",
          rm."approve_status" as "approveStatus"
          FROM 
            "users" as u 
          INNER JOIN 
            "recruiter_metadata_v1" as rm ON u."id" = rm."user_id"
          ORDER BY
            u."user_name";`
        );
        const profileData: GetRecruiterProfile[] = res.rows;
        return profileData;
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
  async updateRecruiterStatus(recruiterUserId: number, approveStatus: string) {
    return await this.retryQuery("updateRecruiterStatus", async () => {
      let pClient;
      try {
        pClient = await this.connect();
        await pClient.query("BEGIN");
        const res = await pClient.query(
          `
          UPDATE 
            "recruiter_metadata_v1"
          SET "approve_status" = $2::approve_type
          WHERE
            "user_id" = $1::int   
          RETURNING "id";`,
          [recruiterUserId, approveStatus]
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
}

export { DB, UserDBv1, SessionDB, AdminDbv1 };
