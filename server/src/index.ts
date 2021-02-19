import express from "express";
import colors from "colors";
import cors from "cors";
import cookieParser from "cookie-parser";
import { requireLogin } from "./middleware";
import loginRoute from "./routes/login-route";
import registerRoute from "./routes/register-route";
import mongoose from "mongoose";
import { connectDatabase } from "./database";
import session from "express-session";
var bodyParser = require("body-parser");

declare module "express-session" {
  export interface SessionData {
    user: { [key: string]: any };
  }
  export interface Session {
    user: { [key: string]: any };
  }
}

const connect = connectDatabase();

const app = express();
const PORT = 3003;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(
  cors({
    origin: `http://localhost:3000`,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(cookieParser());

app.use(loginRoute);
app.use(registerRoute);

app.get("/test", requireLogin, (req, res) => {
  console.log(req.session);

  res.status(200).send({ success: true, user: req.session.user });
});

const server = app.listen(PORT, () => {
  console.log(colors.blue(`[app]: http://localhost:${PORT}/`));
});
