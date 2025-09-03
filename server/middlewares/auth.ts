import chalk from "chalk";
import { NextFunction, Request, Response } from "express";
import { SessionDB } from "../db/db";
import { skipRoutes } from "../configs/skipRoutes";

async function authMiddleWare(req: Request, res: Response, next: NextFunction) {
  if (skipRoutes.includes(req.path)) {
    next();
    return;
  }
  let skip = false;
  for (const sr of skipRoutes) {
    if (req.path.startsWith(sr)) {
      skip = true;
      break;
    }
  }
  if (skip) {
    next();
    return;
  }
  try {
    const { sessionId, userName } = req.signedCookies;
    // console.log(sessionId, userId);
    if (!userName || !sessionId) {
      console.log(chalk.yellow(`Auth failed need to log in!`));
      res.status(400).send({
        status: "fail",
        data: {
          message: "Please Login In!",
          redirectPage: "/sign-in",
        },
      });
      return;
    }
    const sessionDb = new SessionDB();
    const sessionIdValidate = await sessionDb.getSessionId(
      userName
    );
    if (sessionIdValidate === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database is offline, or Database error!",
        },
      });
      return;
    }
    if (sessionIdValidate === -1) {
      res.status(401).send({
        status: "fail",
        data: {
          message: `SessionId not found with this userName ${userName}!`,
        },
      });
      return;
    }
    if (sessionIdValidate !== sessionId) {
      res.status(401).send({
        status: "fail",
        data: {
          message: "Invalid Credentials : sessionId",
        },
      });
      return;
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "fail",
      error: error,
      data: {
        message: "Server Error!",
      },
    });
  }
}

export { authMiddleWare };
