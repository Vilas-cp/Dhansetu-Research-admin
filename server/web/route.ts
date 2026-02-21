import chalk from "chalk";
import express from "express";
import { SessionDB, UserDB, WebDB } from "../db/db";
import { envConfigs, serverConfigs } from "../configs/configs";
import { MailHandler } from "../helpers/notifications";
import Razorpay from "razorpay";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
import { OptId, pricing, TimeId } from "../helpers/price";
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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    // console.log(req.body);
    const webDb = new WebDB();
    const secret = RAZORPAY_KEY_SECRET || "no_secret";
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret,
    );
    console.log(`Is Valid ${razorpay_order_id}`, isValidSignature);
    if (!isValidSignature) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "Razorpay payment verification failed!",
        },
      });
      return;
    }
    const timeId: TimeId = req.body?.timeId as TimeId;
    const optId: OptId = req.body?.optId as OptId;
    const price = pricing[timeId][optId].price;
    const amount = (price + price * 0.18).toString();
    if (!(timesId.includes(timeId) || optsId.includes(optId))) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "timeId or optId is wrong!",
        },
      });
      return;
    }
    const userEmailId = req.body?.email || "no email";
    const userName = req.body?.name || "no name";
    const userNo = req.body?.contact || "no contact";
    res.status(200).send({
      status: "success",
      data: {
        message: "Order " + (isValidSignature ? "succedded" : "failed"),
        successIsValid: isValidSignature,
      },
    });
    await webDb.insertPaymentRecord(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userEmailId,
      userName,
      userNo,
      optId, 
      timeId, 
      amount
    );
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

const timesId: TimeId[] = ["monthly", "quarterly", "halfYearly"];
const optsId: OptId[] = [
  "basicIndex",
  "moderateIndex",
  "advanceIndex",
  "stockOption",
  "stockFuture",
  "equityResearch",
  "longTermEquity",
  "mcx",
];

v1Routes.post("/buy/order/rzpay/:timeId/:optId", async (req, res) => {
  try {
    const timeId: TimeId = req.params.timeId as TimeId;
    const optId: OptId = req.params.optId as OptId;
    if (!(timesId.includes(timeId) || optsId.includes(optId))) {
      res.status(400).send({
        status: "fail",
        data: {
          message: "timeId or optId is wrong!",
        },
      });
      return;
    }
    const userDetails = req.body;
    // console.log(userDetails);
    const price = pricing[timeId][optId].price;
    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });
    const amount = price + price * 0.18;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "web_receipt",
      notes: {
        userName: userDetails?.name,
        userEmail: userDetails?.email,
        userNo: userDetails?.contact,
        type: "web",
      },
    };
    const order = await razorpay.orders.create(options);
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
