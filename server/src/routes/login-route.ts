import express from "express";

const router = express.Router();

router.get("/home", (_req, res) => {
  res.status(200).send(`Home page`);
});

router.get("/list", (_req, res) => {
  res.status(200).send(`List page`);
});

export default router;
