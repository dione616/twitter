import express from "express";
var bodyParser = require("body-parser");
const app = express();

const registerRoute = express.Router();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

registerRoute.get(`/register`, (_req, res) => {
  res.status(200).send(`Register page y`);
});
registerRoute.post(`/register`, (req, res) => {
  console.log(req.body);
  res.status(200).send(`Register page y`);
});

export default registerRoute;
