import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import express from "express";
import { User } from "../schemas/UserSchema";
import { IDecoded } from "../lib/types";
import session from "express-session";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

interface DecodedData {
  password: string;
  email: string;
}

const loginRoute = express.Router();
loginRoute.post("/login", async (req, res) => {
  console.log(req.body);

  if (req.body.email && req.body.password) {
    const user = await User.findOne({ email: req.body.email }).catch((err) => {
      console.log(err);
      res.status(200).send(err);
    });

    if (user) {
      const decoded = jwt.verify(user.token, `${process.env.TOKEN_SECRET}`);
      const decodedPassword = (<DecodedData>decoded).password;
      if (decodedPassword === req.body.password) {
        req.session.user = user;
        console.log("1 ", req.session.user);

        return res.status(200).send({ success: true, user });
      }
      res.send({ success: false, error: "Wrong login credentials!" });
    } else {
      res.send({ success: false, error: "Wrong email credentials!" });
    }
  } else {
    res.send({ success: false, error: "Not valid data" });
  }
});

loginRoute.post("/logout", (req, res) => {
  req.session.user = null;
  res.send({ logout: true });
});

export default loginRoute;
