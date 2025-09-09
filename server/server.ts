import chalk from "chalk";
import { DB } from "./db/db";
// import { MemCache } from "./cache/redis";
// import { S3Bucket } from "./aws/s3";
import { app } from "./app";
import { envConfigs, serverConfigs } from "./configs/configs";
import fs from "fs";
import path from "path";
import { MailHandler } from "./helpers/notifications";

async function main() {
  try {
    const {
      DB_CONNECTION_URL,
      MAIL_ID,
      MAIL_PASS
    } = envConfigs;
    const PORT = process.env?.PORT || 9000;

    //
    // Init DB/Other services
    //

    // PSQL
    const db = new DB(DB_CONNECTION_URL || "need connection string");
    const dbRes = await db.ping();
    if (!dbRes) {
      console.log(chalk.yellow(`Initially Cannot Connect to PostgresSQL DB!`));
    } else {
      console.log(chalk.yellow(`Initially Connected to PostgresSQL DB!`));
      // console.log(dbRes.rows?.[0]);
    }
    new MailHandler(MAIL_ID || "need mail id", MAIL_PASS || "need pass");

    // Redis
    // const memCache = new MemCache(
    //   CACHE_CONNECTION_URL || "need connection string"
    // );
    // await memCache.connect();
    // const redisRes = await memCache.ping();
    // if (!redisRes) {
    //   console.log(chalk.yellow(`Initially Cannot Connect to Redis Cache DB!`));
    // } else {
    //   console.log(chalk.yellow(`Initially Connected to Redis Cache DB!`));
    // console.log(redisRes);
    // }

    // S3
    // const s3 = new S3Bucket({
    //   region: AWS_REGION || "need aws region",
    //   accessKeyId: AWS_ACCESS_KEY || "need access key",
    //   secretAccessKey: AWS_SECRET_KEY || "need secret key",
    // });
    // if (!s3.getConfig()) {
    //   console.log(chalk.yellow(`AWS S3 is not set upped!`));
    // } else {
    //   console.log(chalk.yellow(`AWS S3 is ready for uploading!`));
    // }

    app.listen(PORT, async () => {
      console.log(chalk.greenBright(`Server listening to Port: ${PORT}`));
      const tmpPath = path.join(process.cwd(), "./tmp");
      if (!fs.existsSync(tmpPath)) {
        fs.mkdirSync(tmpPath);
      }
    });
    process.on("SIGINT", async () => {
      console.log(chalk.red("Shutting down Process..."));
      try {
        console.log(chalk.yellow("Cleaning up DB connections!"));
        // await memCache.disconnect();
        // console.log(chalk.yellowBright("Cleaned up Redis DB!"));
        await db.end();
        console.log(chalk.yellowBright("Cleaned up PostgresSQL DB!"));
        console.log(chalk.green("Cleaned up done!"));
        process.exit(0);
      } catch (error: any) {
        console.log(chalk.red("Error during shutdown:"), error?.message);
        console.log(chalk.redBright("Forcefully shutting down!"));
        process.exit(1);
      }
    });
    process.on("uncaughtException", (err) => {
      console.log(chalk.red(`Uncaught Exception: ${err.message}`));
    });
    process.on("unhandledRejection", (reason) => {
      console.log(chalk.red(`Unhandled Rejection: ${reason}`));
    });
  } catch (error: any) {
    console.log("Error: ", error?.message, error?.code);
  }
}

main();
