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
  const firstname = req.body.firstname.trim();
  const lastname = req.body.lastname.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const repeat_password = req.body.repeat_password.trim();

  if (firstname && lastname && email && password && repeat_password) {
    res.status(200).send({ success: true });
  } else {
    res.status(200).send({ success: false });
  }
});

export default registerRoute;
