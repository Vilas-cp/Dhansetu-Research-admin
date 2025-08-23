import chalk from "chalk";
import express from "express";
import { AdminCache, ClerkCache } from "../cache/redis";
import { AdminDbv1, SessionDB, UserDBv1 } from "../db/db";
import { clerkClient } from "@clerk/express";
import { envConfigs, serverConfigs } from "../configs/configs";
import { v4 } from "uuid";
import { Cookies, SessionId } from "../types/auth";
import {
  AdminInfo,
  candidateProfileSchema,
  ClerkInfo,
  GetRecruiterProfile,
  recruiterProfileSchema,
  UpdateNoti,
} from "../types/user";
import fileUpload, { UploadedFile } from "express-fileupload";
import { getBufferFromImgURL } from "../helpers/fetchURL";
const userRouter = express.Router();
const v1Routes = express.Router();

// Macros
const { SESSION_EXPIRE_TIME_IN_DAYS } = serverConfigs;
const { ADMIN_PASS } = envConfigs;


v1Routes.post("/login/admin", async (req, res) => {
  try {
    const { password }: AdminInfo = req.body;
    const { userId, sessionId }: Cookies = req.signedCookies;
    if (!userId || !sessionId) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Didnt get clerk userId, please login in!",
          redirectPage: "/sign-in",
        },
      });
      return;
    }
    if (!password) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Didnt get password!",
        },
      });
      return;
    }
    if (ADMIN_PASS && password !== ADMIN_PASS) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Wrong password!",
        },
      });
      return;
    }
    const mClient = new AdminCache();
    let sessionIdRes: SessionId = await mClient.getAdminByClerkUserId(userId);
    if (!sessionIdRes) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Redis DB is offline!",
        },
      });
      return;
    }
    if (sessionIdRes === -1) {
      sessionIdRes = await mClient.createAdminByClerkUserId(userId, sessionId);
    }
    res.status(200).send({
      status: "success",
      data: {
        sessionId: sessionIdRes,
      },
    });
    console.log(chalk.yellow(`User: ${userId}, is logged in as Admin!`));
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userId}`)
    );
    res.status(400).send({
      status: "fail",
      error: error,
      data: {
        message: "Internal Server Error!",
      },
    });
  }
});

v1Routes.get("/onboarding/admin", async (req, res) => {
  try {
    const { userId, sessionId }: Cookies = req.signedCookies;
    if (!userId || !sessionId) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Didnt get clerk userId, please login in!",
          redirectPage: "/sign-in",
        },
      });
      return;
    }
    const mClient = new AdminCache();
    let sessionIdRes: SessionId = await mClient.getAdminByClerkUserId(userId);
    if (!sessionIdRes) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Redis DB is offline!",
        },
      });
      return;
    }
    if (sessionIdRes === -1) {
      res.status(200).send({
        status: "success",
        data: {
          message: "Need to login!",
          onboarding: false,
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        sessionId: sessionIdRes,
        onboarding: true,
      },
    });
    console.log(chalk.yellow(`User: ${userId}, is logged in as Admin!`));
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userId}`)
    );
    res.status(400).send({
      status: "fail",
      error: error,
      data: {
        message: "Internal Server Error!",
      },
    });
  }
});

v1Routes.post("/signout", async (req, res) => {
  try {
    const { userId }: Cookies = req.signedCookies;
    res.clearCookie("sessionId", {
      httpOnly: true,
      secure: true,
      signed: true,
      path: "/",
      sameSite: "none",
    });
    res.clearCookie("userId", {
      httpOnly: true,
      secure: true,
      signed: true,
      path: "/",
      sameSite: "none",
    });
    res.status(200).send({
      status: "success",
      data: {
        message: "Signout successfull, cookies cleared.",
      },
    });
    console.log(chalk.yellow(`User: ${userId}, is logged out!`));
  } catch (error: any) {
    console.log(
      chalk.red(
        `Error: ${error?.message}, for user id ${
          req.body?.userId || req.signedCookies?.userId
        }`
      )
    );
    res.status(400).send({
      status: "fail",
      error: error,
      data: {
        message: "Internal Server Error!",
      },
    });
  }
});

v1Routes.get("/onboarding", async (req, res) => {
  try {
    const { userId }: Cookies = req.signedCookies;
    if (!userId) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Didnt find cookies, please login in!",
          redirectPage: "/sign-in",
        },
      });
      return;
    }
    const userDb = new UserDBv1();
    const dbRes = await userDb.getIdByClerkUserId(userId);
    if (!dbRes) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "PostgresSQL Database is offline, please try again later!",
        },
      });
      return;
    }
    if (dbRes === -1) {
      res.status(200).send({
        status: "success",
        data: {
          message:
            "Didnt find any data for the given clerk user id. Please onboard!",
          onboarding: true,
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        userData: dbRes,
        onboarding: false,
      },
    });
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userId}`)
    );
    res.status(400).send({
      status: "fail",
      error: error,
      data: {
        message: "Internal Server Error!",
      },
    });
  }
});


v1Routes.post("/test", async (req, res) => {
  // An Api for Testing
  try {
    const { userId } = req.body;
    const user = await clerkClient.users.getUser(userId);
    console.log(user);
    user.emailAddresses[0].verification?.status;
    res.status(200).send({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "fail",
      error: error,
      data: {
        message: "Internal Server Error!",
      },
    });
  }
});

userRouter.use("/v1", v1Routes);

export { userRouter };
