import chalk from "chalk";
import express from "express";
import { SessionDB, UserDB } from "../db/db";
import { envConfigs, serverConfigs } from "../configs/configs";
import { v4 } from "uuid";
import { MailHandler } from "../helpers/notifications";
import Razorpay from "razorpay";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
const v1Routes = express.Router();
const webRoutes = express.Router();

// Macros
const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = envConfigs;

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
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`),
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

v1Routes.get("/info", async (req, res) => {
  try {
    const { sessionId, userName } = req.signedCookies;
    // console.log(userName, sessionId);
    if (!sessionId || !userName) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "SessionId not found",
        },
      });
      return;
    }
    const userDb = new UserDB();
    const userInfo = await userDb.getClientUser(userName);
    if (userInfo === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (userInfo === -1) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Did not find the user with the given emailid.",
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        userInfo,
      },
    });
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`),
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
  try {
    const { sessionId, userName } = req.signedCookies;
    const mailHand = new MailHandler();
    // await mailHand.sendMail("vilaspgowda1000@gmail.com", "", "", "");
    res.status(200).send({
      status: "success",
      data: {
        message: "Hello Tiger!",
      },
    });
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`),
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


v1Routes.post("/buy/verify/rzpay", async (req, res) => {
  try {
    const { sessionId, userName } = req.signedCookies;
    if (!sessionId || !userName) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "SessionId not found",
        },
      });
      return;
    }
    const userDb = new UserDB();
    const userInfo = await userDb.getClientUser(userName);
    if (userInfo === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (userInfo === -1) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "User does not exists.",
        },
      });
      return;
    }
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    console.log(req.body);
    const secret = RAZORPAY_KEY_SECRET || "no_secret";
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret,
    );
    console.log(`Is Valid ${razorpay_order_id}`, isValidSignature);
    res.status(200).send({
      status: "success",
      data: {
        message: "Order " + (isValidSignature ? "succedded" : "failed"),
        successIsValid: isValidSignature,
      },
    });
    const txnId = razorpay_order_id;
    const orderInfo = await userDb.getOrder(txnId);
    if (orderInfo === null || orderInfo === -1) {
      return;
    }
    if (orderInfo.status === "success") {
      return;
    }
    const orderUpdate = await userDb.verifyOrder(txnId);
    if (orderUpdate === null || orderUpdate === -1) {
      return;
    }
    const addUserSub = await userDb.addUserSub(txnId);
    if (addUserSub === null || addUserSub === -1) {
      return;
    }
    const userDet = await userDb.getUserDet(txnId);
    if (userDet === null || userDet === -1) {
      return;
    }
    const emailId = userInfo.emailId;
    const mailHelp = new MailHandler();
    await mailHelp.sendMail(
      emailId,
      userDet.sub.amount.toString(),
      userDet.sub.subName,
      (new Date()).toISOString(),
      txnId,
      userInfo.firstName + userInfo.lastName,
    );
    console.log(chalk.yellow(`User: ${emailId}, payment verified!`));
    return;
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`),
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

v1Routes.post("/buy/order/rzpay/:subId", async (req, res) => {
  try {
    const { sessionId, userName } = req.signedCookies;
    if (!sessionId || !userName) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "SessionId not found",
        },
      });
      return;
    }
    const userDb = new UserDB();
    const userInfo = await userDb.getClientUser(userName);
    if (userInfo === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (userInfo === -1) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "User does not exists.",
        },
      });
      return;
    }
    const subId = req.params.subId;
    const subInfo = await userDb.getSubInfo(subId);
    if (subInfo === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (subInfo == -1) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Wrong subId given.",
        },
      });
      return;
    }
    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });
    const amount = subInfo.amount;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "no_receipt",
      notes: {},
    };
    const order = await razorpay.orders.create(options);
    const createOrder = await userDb.createOrder(
      userInfo.id,
      subInfo.id,
      order.id,
    );
    if (createOrder === null) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Database error, or Database is offline.",
        },
      });
      return;
    }
    if (createOrder == -1) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Error while creating order in Database.",
        },
      });
      return;
    }
    res.status(200).send({
      status: "success",
      data: {
        message: "Order created",
        order: order,
      },
    });
    return;
  } catch (error: any) {
    console.log(
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.userName}`),
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

webRoutes.use("/v1", v1Routes);

export { webRoutes };
