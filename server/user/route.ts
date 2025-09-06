import chalk from "chalk";
import express from "express";
import { SessionDB, UserDB } from "../db/db";
import { serverConfigs } from "../configs/configs";
import { v4 } from "uuid";
const v1Routes = express.Router();
const userRoutes = express.Router();

// Macros
const { SESSION_EXPIRE_TIME_IN_DAYS } = serverConfigs;

v1Routes.post("/login", async (req, res) => {
  try {
    const { emailId, clerkId, firstName, lastName, imgURL } = req.body;
    // console.log(req.body);
    const { sessionId } = req.signedCookies;
    const userDb = new UserDB();
    const userRes = await userDb.getClientUser(emailId);
    if (userRes === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    let userCreated = false;
    if (userRes === -1) {
      const createUserRes = await userDb.createClientUser(
        emailId,
        clerkId,
        firstName,
        lastName,
        imgURL,
        "free"
      );
      if (createUserRes === null) {
        res.status(400).send({
          status: "fail",
          data: {
            message: "Database error, or Database is offline.",
          },
        });
        return;
      }
      if (createUserRes === -1) {
        res.status(400).send({
          status: "fail",
          data: {
            message: "Could not create user.",
          },
        });
        return;
      }
      userCreated = true;
    }
    const sessionDB = new SessionDB();
    if (sessionId) {
      const sessionIdRes = await sessionDB.getSessionId(emailId);
      if (sessionIdRes === sessionId) {
        res.status(200).send({
          status: "success",
          data: {
            sessionId: sessionIdRes,
            userCreated,
          },
        });
        return;
      }
    }
    let sessionIdRes = await sessionDB.getSessionId(emailId);
    if (!sessionIdRes || sessionIdRes === -1) {
      const sessionId = v4();
      sessionIdRes = await sessionDB.createSessionId(emailId, sessionId);
      if (!sessionIdRes || sessionIdRes === -1) {
        res.status(400).send({
          status: "fail",
          data: {
            message: "Database is offline, or Database error",
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
    res.cookie("userName", emailId, {
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
        userCreated,
      },
    });
    console.log(chalk.yellow(`User: ${emailId}, is logged in as user!`));
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.emailId}`)
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
    console.log(chalk.yellow(`User: ${userName}, is logged out as user!`));
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
    const offset = parseInt(req.query["offset"] as string) || 0;
    const userDb = new UserDB();
    const artRes = await userDb.getAllArticles(offset);
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
    const userDb = new UserDB();
    const artRes = await userDb.getArticle(artId);
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
    if (artRes.artType === "free") {
      res.status(200).send({
        status: "success",
        data: {
          res: artRes,
          access: true,
        },
      });
      return;
    }
    const sessionDB = new SessionDB();
    const sessionIdRes = await sessionDB.getSessionId(userName || "");
    if (!sessionId || sessionIdRes !== sessionId) {
      res.status(200).send({
        status: "success",
        data: {
          message: "Please login!",
        },
        access: false,
        userLoggedIn: false,
      });
      return;
    }
    const userRes = await userDb.getClientUser(userName);
    if (userRes === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (userRes === -1 || userRes.type !== "premium") {
      res.status(200).send({
        status: "success",
        data: {
          message: "You need premium subscription to view this blog.",
          access: false,
          userLoggedIn: userRes !== -1,
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        res: artRes,
        access: true,
        userLoggedIn: true,
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
