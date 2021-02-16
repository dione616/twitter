import express from "express";
import colors from "colors";
import cors from "cors";
import cookieParser from "cookie-parser";
import { requireLogin } from "./middleware";

const app = express();
const PORT = 3003;

app.use(cors({ origin: `http://localhost:3000`, optionsSuccessStatus: 200 }));
app.use(cookieParser());

app.get("/home", requireLogin, (_req, res) => {
  res.status(200).send(`Home page`);
});

app.get("/list", (_req, res) => {
  res.status(200).send(`List page`);
});

const server = app.listen(PORT, () => {
  console.log(colors.blue(`[app]: http://localhost:${PORT}/`));
});
