import express from "express";
import { User } from "../schemas/UserSchema";
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
registerRoute.post(`/register`, async (req, res) => {
  console.log(req.body);
  console.log(`Iam here 1`);
  const firstname = req.body.firstname.trim();
  const lastname = req.body.lastname.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const repeat_password = req.body.repeat_password.trim();

  if (firstname && lastname && email && password && repeat_password) {
    const user = await User.findOne({ email }).catch((err) => {
      console.log(err);
      console.log(`Iam here 2`);
      res
        .status(200)
        .send({ success: false, error: "Something wrong with DB" });
    });

    let createdUser;

    if (user) {
      if (user.email === email) {
        res.status(200).send({ success: false, error: "Email exists" });
      }
    } else {
      console.log(`Iam here 4`);
      const userToCreate = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      };

      User.create(userToCreate).then((user) => {
        console.log(user);
        createdUser = user;
      });
      console.log(`Iam here 5`);
      res.status(200).send({ success: true });
    }
  }
});

export default registerRoute;
