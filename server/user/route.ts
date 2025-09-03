import chalk from "chalk";
import express from "express";
import { AdminDb, SessionDB } from "../db/db";
import { envConfigs, serverConfigs } from "../configs/configs";
import { v4 } from "uuid";
import { AdminInfo } from "../types/user";
const v1Routes = express.Router();
const userRoutes = express.Router();

// Macros
const { SESSION_EXPIRE_TIME_IN_DAYS } = serverConfigs;
const { ADMIN_PASS, SUPER_PASS } = envConfigs;

v1Routes.post("/login", async (req, res) => {
  try {
    const { password, userName }: AdminInfo = req.body;
    const { sessionId } = req.signedCookies;
    if (!password || !userName) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "Didnt get password or userName!",
        },
      });
      return;
    }
    const adminDb = new AdminDb();
    const adminUserRes = await adminDb.getAdminUser(userName);
    if (adminUserRes === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (adminUserRes === -1) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "User with username not found.",
        },
      });
      return;
    }
    const sessionDB = new SessionDB();
    if (ADMIN_PASS && password !== ADMIN_PASS) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "Wrong password!",
        },
      });
      return;
    }
    if (sessionId) {
      const sessionIdRes = await sessionDB.getSessionId(userName);
      if (sessionIdRes === sessionId) {
        res.status(200).send({
          status: "success",
          data: {
            sessionId: sessionIdRes,
          },
        });
        return;
      }
    }
    let sessionIdRes = await sessionDB.getSessionId(userName);
    if (!sessionIdRes || sessionIdRes === -1) {
      const sessionId = v4();
      sessionIdRes = await sessionDB.createSessionId(userName, sessionId);
      if (!sessionIdRes || sessionIdRes === -1) {
        res.status(400).send({
          status: "fail",
          data: {
            message: "Database is offline",
          },
        });
        return;
      }
    }
    res.cookie("sessionId", sessionIdRes, {
      httpOnly: true,
      secure: true,
      signed: true,
      path: "/",
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * SESSION_EXPIRE_TIME_IN_DAYS,
    });
    res.cookie("userName", userName, {
      httpOnly: true,
      secure: true,
      signed: true,
      path: "/",
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * SESSION_EXPIRE_TIME_IN_DAYS,
    });
    res.status(200).send({
      status: "success",
      data: {
        sessionId: sessionIdRes,
      },
    });
    console.log(chalk.yellow(`User: ${userName}, is logged in as Admin!`));
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`)
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

v1Routes.post("/verify", async (req, res) => {
  try {
    const { sessionId, userName } = req.signedCookies;
    const sessionDB = new SessionDB();
    if (!sessionId || !userName) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "SessionId not found",
        },
      });
      return;
    }
    const sessionIdRes = await sessionDB.getSessionId(userName);
    if (sessionIdRes !== sessionId) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "Invalid Credentials : sessionId",
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        message: "User is verified",
        sessionId: sessionIdRes,
      },
    });
    console.log(chalk.yellow(`User: ${userName}, is verified!`));
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`)
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

v1Routes.post("/logout", async (req, res) => {
  try {
    const { sessionId, userName } = req.signedCookies;
    // console.log(sessionId, userName);
    if (sessionId && userName) {
      res.clearCookie("sessionId", {
        httpOnly: true,
        secure: true,
        signed: true,
        path: "/",
        sameSite: "none",
      });
      res.clearCookie("userName", {
        httpOnly: true,
        secure: true,
        signed: true,
        path: "/",
        sameSite: "none",
      });
    }
    res.status(200).send({
      status: "success",
      data: {
        message: "Admin has logged out",
      },
    });
    console.log(chalk.yellow(`User: ${userName}, is logged out as Admin!`));
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`)
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

v1Routes.get("/articles/all", async (req, res) => {
  try {
    const { sessionId, userName } = req.signedCookies;
    if (!sessionId || !userName) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "SessionId not found",
        },
      });
      return;
    }
    const adminDb = new AdminDb();
    const artRes = await adminDb.getAllArticles();
    if (artRes === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        res: artRes,
      },
    });
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`)
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

v1Routes.get("/article/:artid", async (req, res) => {
  try {
    const { sessionId, userName } = req.signedCookies;
    const artId = req.params.artid;
    if (!sessionId || !userName) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "SessionId not found",
        },
      });
      return;
    }
    const adminDb = new AdminDb();
    const artRes = await adminDb.getArticle(artId);
    if (artRes === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (artRes === -1) {
      res.status(400).send({
        status: "fail",
        data: {
          message:
            "Did not find the article with the given article id, and for this lang.",
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        res: artRes,
      },
    });
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`)
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

userRoutes.use("/v1", v1Routes);

export { userRoutes };
