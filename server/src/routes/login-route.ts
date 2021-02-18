import express from "express";

const loginRoute = express.Router();

loginRoute.get("/home", (_req, res) => {
  res.status(200).send(`Home page1`);
});
loginRoute.get("/login", (_req, res) => {
  res.status(200).send(`Home page1`);
});
loginRoute.post("/login", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  console.log(req.body);

  if (email && password) {
    res.status(200).send({ success: true });
  } else {
    res.status(200).send({ success: false });
  }
});

/* loginRoute.get("/list", (_req, res) => {
  res.status(200).send(`List page1`);
}); */

export default loginRoute;
