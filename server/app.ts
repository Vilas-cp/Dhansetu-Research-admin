import express from "express";
import cors, { CorsOptions } from "cors";
import helmet from "helmet";
// import { fileRouter } from "./file/route";
// import { userRouter } from "./user/route";
import cookieParser from "cookie-parser";
import { authMiddleWare } from "./middlewares/auth";
import { hitMiddleWare } from "./middlewares/hit";
import { envConfigs, serverConfigs } from "./configs/configs";
import morgan from "morgan";
import chalk from "chalk";
import { DB } from "./db/db";
// import { rateLimitMiddleWare } from "./middlewares/rateLimiting";
import compression from "compression";
import { adminRoutes } from "./admin/route";
import { userRoutes } from "./user/route";
import { webRoutes } from "./web/route";

const { COOKIE_SECRET } = envConfigs;

// App instance - Express server
const app = express();

// Middlewares
app.set("trust proxy", 1);
// Only needed in Dev, in Prod disable this
app.use((_, res, next) => {
  res.setHeader("ngrok-skip-browser-warning", "true");
  next();
});

const whitelist = [
  "http://localhost:3000",
  "https://blog.dhanseturesearch.in",
  "https://adminblog.dhanseturesearch.in",
  "https://dhanseturesearch.com",
  // "https://test.payu.in",
];
// const whitelist = ["http://localhost:3000"];
const corsOptions: CorsOptions = {
  origin: function (url, callback) {
    if (!url) {
      callback(null, true);
      return;
    }
    if (whitelist.indexOf(url) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(COOKIE_SECRET));
app.use(morgan("dev"));
app.use(hitMiddleWare);
// app.use(rateLimitMiddleWare);
app.use(authMiddleWare);

// Routes
// app.use("/file", fileRouter);
// app.use("/user", userRouter);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/web", webRoutes);

app.get("/hello", (_, res) => {
  try {
    res
      .status(200)
      .send({ status: "success", data: { message: "Hello Tiger!" } });
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

app.get("/", async (_, res) => {
  try {
    const db = new DB();
    const dbRes = await db.ping();
    res.status(200).send({
      status: "success",
      data: {
        dbRes,
        // cacheRes,
        message: "Express JS Server is Running!",
        extra: `Serving form process ${process.pid}`,
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

export { app };
