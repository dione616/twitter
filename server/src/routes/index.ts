import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import express from "express";
import twitts from "./twitts";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const api = express.Router();

api.use("/twitts", twitts);

export default api;
