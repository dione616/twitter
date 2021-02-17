import express from "express";

const loginRoute = express.Router();

loginRoute.get("/home", (_req, res) => {
  res.status(200).send(`Home page1`);
});
loginRoute.get("/login", (_req, res) => {
  res.status(200).send(`Home page1`);
});

/* loginRoute.get("/list", (_req, res) => {
  res.status(200).send(`List page1`);
}); */

export default loginRoute;
