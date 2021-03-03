import session from "express-session";
import bodyParser from "body-parser";
import express from "express";
import { Twitt } from "../schemas/PostSchema";
import { User } from "../schemas/UserSchema";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const router = express.Router();

router.get("/", async (req, res) => {
  const twitts = await Twitt.find({}).then((twitts) => twitts);
  console.log(twitts);

  res.status(200).send({ twitts });
});
router.post("/", (req, res) => {
  const data = req.body;
  console.log("req: ", req.body.text.trim());
  if (!req.body.text) {
    return res.send({ error: "Wrong content!" });
  }

  console.log("SEssion:", req.session.user);

  if (req.session.user) {
    const twittData = { content: req.body.text, author: req.session.user._id };

    Twitt.create(twittData)
      .then(async (newTwitt) => {
        /* newTwitt = await User.populate(newTwitt, { path: "author" }); */
        console.log("TW from DB: ", newTwitt);

        res.status(201).send({ error: false, twitt: newTwitt });
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: "Can't add to DB" });
      });
  } else {
    res.send({ error: "You must auth first!!!" });
  }
});

export default router;
