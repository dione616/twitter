require("dotenv").config();
import express from "express";
import { User } from "../schemas/UserSchema";
var bodyParser = require("body-parser");
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
  const firstname = req.body.firstname.trim();
  const lastname = req.body.lastname.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const repeat_password = req.body.repeat_password.trim();

  if (firstname && lastname && email && password && repeat_password) {
    const user = await User.findOne({ email }).catch((err) => {
      console.log(err);
      res
        .status(200)
        .send({ success: false, error: "Something wrong with DB" });
    });

    if (user) {
      if (user.email === email) {
        res.status(200).send({ success: false, error: "Email exists" });
      }
    } else {
      const token = jwt.sign(
        { email, password },
        `${process.env.TOKEN_SECRET}`
      );

      const userToCreate = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:
          req.body.email /* ,
        
        password: req.body.password, */,
        token,
      };

      /* userToCreate.password = await bcrypt.hash(password, 10); */

      console.log(token);

      const dbResponse = await User.create(userToCreate).then((user) => {
        req.session.user = user;
        req.session.cookie.maxAge = 3 * 24 * 60 * 60 * 1000;
        req.session.save();
        console.log("req.session.user = user;", req.session);
        return user;
      });

      console.log(dbResponse);

      res.status(200).send({ success: true, response: dbResponse });
    }
  }
});

export default registerRoute;
