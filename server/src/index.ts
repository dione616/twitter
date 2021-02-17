import express from "express";
import colors from "colors";
import cors from "cors";
import cookieParser from "cookie-parser";
import { requireLogin } from "./middleware";
import loginRoute from "./routes/login-route";
import registerRoute from "./routes/register-route";
var bodyParser = require("body-parser");

const app = express();
const PORT = 3003;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors({ origin: `http://localhost:3000`, optionsSuccessStatus: 200 }));
app.use(cookieParser());

app.use(loginRoute);
app.use(registerRoute);

/* app.post(`/register`, (req, res) => {
  console.log(req.body);
  res.status(200).send(`Register page y`);
});
app.get(`/register`, (req, res) => {
  console.log(req.body);
  res.status(200).send(`Register page y`);
}); */

const server = app.listen(PORT, () => {
  console.log(colors.blue(`[app]: http://localhost:${PORT}/`));
});
