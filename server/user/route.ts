import chalk from "chalk";
import express from "express";
import { SessionDB, UserDB } from "../db/db";
import { envConfigs, serverConfigs } from "../configs/configs";
import { v4 } from "uuid";
import { generateOrder } from "../helpers/orders";
import { PayUBody } from "../types/sub";
import { getPaymentDetails } from "../helpers/fetchURL";
import { MailHandler } from "../helpers/notifications";
import Razorpay from "razorpay";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
const v1Routes = express.Router();
const userRoutes = express.Router();

// Macros
const { SESSION_EXPIRE_TIME_IN_DAYS } = serverConfigs;
const { PAYU_MERCHANT_ID, PAYU_SALT } = envConfigs;
const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = envConfigs;

const backendLink = serverConfigs.BACKEND_LINK;
const clientLink = serverConfigs.CLIENT_LINK;

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
      chalk.red(`Error: ${error?.message}, for user id ${req.body?.emailId}`),
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
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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
        message: "User has logged out",
      },
    });
    console.log(chalk.yellow(`User: ${userName}, is logged out as user!`));
  } catch (error: any) {
    console.log(
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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
    // console.log(userName, sessionId);
    const sessionIdRes = await sessionDB.getSessionId(userName || "");
    // console.log(sessionId, sessionIdRes);
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
    if (userRes === -1 || userRes?.sub?.type === "free") {
      res.status(200).send({
        status: "success",
        data: {
          message:
            "You need premium subscription accont to view this blog. Please buy it, or renew it.",
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
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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
    // const userName = req.body.userName;
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
    // console.log(req.body);
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
    // if (orderInfo.status === "success") {
    //   return;
    // }
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
    // console.log(userDet);
    await mailHelp.sendMail(
      emailId,
      userDet.sub.amount.toString(),
      userDet.sub.subName,
      new Date().toISOString(),
      txnId,
      `${userInfo.firstName} ${userInfo.lastName}`,
    );
    console.log(chalk.yellow(`User: ${emailId}, payment verified!`));
    return;
  } catch (error: any) {
    console.log(
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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
    console.log(userName);
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
    if (subInfo === -1) {
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
    const amount = subInfo.amount + subInfo.amount * 0.18;
    console.log(userInfo);
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "blog_receipt",
      notes: {
        userEmail: userName,
        userName: `${userInfo.firstName} ${userInfo.lastName}`,
        userId: userInfo.uuid,
      },
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
      chalk.red(
        `Error: ${error?.message}, for user id ${req.signedCookies?.userName}`,
      ),
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

// PayU

// {
//   v1Routes.post("/buy/verify/success", async (req, res) => {
//     try {
//       // console.log(req.body);
//       const payUBody: PayUBody = req.body;
//       const userDb = new UserDB();
//       const txnId: string = payUBody.txnid;
//       if (!PAYU_MERCHANT_ID || !PAYU_SALT) {
//         res.redirect("http://localhost:3000/failure");
//         return;
//       }
//       const payUId = payUBody.mihpayid;
//       const payRes = await getPaymentDetails(payUId, PAYU_MERCHANT_ID, PAYU_SALT);
//       const payResTxnId: string =
//         payRes["transaction_details"]?.["txnid"]?.toString();
//       console.log(payResTxnId);
//       if (payResTxnId !== txnId) {
//         const failureLink = clientLink + "/failure";
//         res.redirect(failureLink);
//         return;
//       }
//       const orderInfo = await userDb.getOrder(txnId);
//       if (orderInfo === null || orderInfo === -1) {
//         res.redirect("http://localhost:3000/failure");
//         return;
//       }
//       if (orderInfo.status === "success") {
//         res.redirect("http://localhost:3000/success");
//         return;
//       }
//       if (orderInfo.status === "fail") {
//         res.redirect("http://localhost:3000/failure");
//         return;
//       }
//       const orderUpdate = await userDb.verifyOrder(txnId);
//       if (orderUpdate === null || orderUpdate === -1) {
//         res.redirect("http://localhost:3000/failure");
//         return;
//       }
//       const addUserSub = await userDb.addUserSub(txnId);
//       if (addUserSub === null || addUserSub === -1) {
//         res.redirect("http://localhost:3000/failure");
//         return;
//       }
//       const successLink = clientLink + "/success";
//       res.redirect(successLink);
//       const emailId = payUBody.email;
//       const mailHelp = new MailHandler();
//       await mailHelp.sendMail(
//         emailId,
//         payUBody.amount,
//         payUBody.productinfo,
//         payUBody.addedon,
//         payUBody.mode,
//         txnId,
//         payUBody.firstname + payUBody.lastname,
//       );
//       console.log(chalk.yellow(`User: ${emailId}, payment verified!`));
//     } catch (error: any) {
//       console.log(
//         chalk.red(`Error: ${error?.message}, for user id ${req.signedCookies?.userName}`),
//       );
//       res.status(400).send({
//         status: "fail",
//         error: error,
//         data: {
//           message: "Internal Server Error!",
//         },
//       });
//     }
//   });

//   v1Routes.post("/buy/verify/fail", async (req, res) => {
//     try {
//       const { sessionId, userName } = req.signedCookies;
//       console.log(req.body);
//       // res.status(200).send({
//       //   status: "success",
//       //   data: {
//       //     message: "Payment fail",
//       //   },
//       // });
//       res.redirect("http://localhost:3000/fail");
//       console.log(chalk.yellow(`User: ${userName}, payment fail!`));
//     } catch (error: any) {
//       console.log(
//         chalk.red(`Error: ${error?.message}, for user id ${req.signedCookies?.userName}`),
//       );
//       res.status(400).send({
//         status: "fail",
//         error: error,
//         data: {
//           message: "Internal Server Error!",
//         },
//       });
//     }
//   });

//   v1Routes.post("/buy/order/:subId", async (req, res) => {
//     try {
//       const { sessionId, userName } = req.signedCookies;
//       if (!sessionId || !userName) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "SessionId not found",
//           },
//         });
//         return;
//       }
//       if (!PAYU_MERCHANT_ID || !PAYU_SALT) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "PayU credentials not found",
//           },
//         });
//         return;
//       }
//       const userDb = new UserDB();
//       const userInfo = await userDb.getClientUser(userName);
//       if (userInfo === null) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "Database error, or Database is offline.",
//           },
//         });
//         return;
//       }
//       if (userInfo === -1) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "User does not exists.",
//           },
//         });
//         return;
//       }
//       const dummyPhone = "no_phone_number";
//       const sUrl = backendLink + "/user/v1/buy/verify/success";
//       const fUrl = backendLink + "/user/v1/buy/verify/fail";
//       const subId = req.params.subId;
//       const subInfo = await userDb.getSubInfo(subId);
//       if (subInfo === null) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "Database error, or Database is offline.",
//           },
//         });
//         return;
//       }
//       if (subInfo == -1) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "Wrong subId given.",
//           },
//         });
//         return;
//       }
//       const params = generateOrder(
//         PAYU_MERCHANT_ID,
//         PAYU_SALT,
//         userInfo.id,
//         userInfo.emailId,
//         userInfo.firstName,
//         userInfo.lastName,
//         dummyPhone,
//         sUrl,
//         fUrl,
//         subInfo.amount.toString(),
//         subInfo.subName,
//       );
//       const createOrder = await userDb.createOrder(
//         userInfo.id,
//         subInfo.id,
//         params.txnid,
//       );
//       if (createOrder === null) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "Database error, or Database is offline.",
//           },
//         });
//         return;
//       }
//       if (createOrder == -1) {
//         res.status(400).send({
//           status: "fail",
//           data: {
//             message: "Failed to create order.",
//           },
//         });
//         return;
//       }
//       res.status(200).send({
//         status: "success",
//         data: {
//           message: "Order created",
//           params: params,
//           order: createOrder,
//         },
//       });
//     } catch (error: any) {
//       console.log(
//         chalk.red(`Error: ${error?.message}, for user id ${req.signedCookies?.userName}`),
//       );
//       res.status(400).send({
//         status: "fail",
//         error: error,
//         data: {
//           message: "Internal Server Error!",
//         },
//       });
//     }
//   });
// }

userRoutes.use("/v1", v1Routes);

export { userRoutes };
