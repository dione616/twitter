import express from "express";
import colors from "colors";
import cors from "cors";
const app = express();
const PORT = 3003;

app.use(cors({ origin: `http://localhost:3000`, optionsSuccessStatus: 200 }));

app.get("/home", (_req, res) => {
  res.status(200).send(`Home page`);
});

app.get("/list", (_req, res) => {
  res.status(200).send(`List page`);
});

const server = app.listen(PORT, () => {
  console.log(colors.blue(`[app]: http://localhost:${PORT}/`));
});
