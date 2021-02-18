import colors from "colors";
require("dotenv").config();
import mongoose from "mongoose";

export const connectDatabase = async () => {
  const client = await mongoose
    .connect(
      `mongodb+srv://user_001:${process.env.DB_USER_PASSWORD}@cluster0.n5ags.mongodb.net/twitter?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        connectTimeoutMS: 10000,
        poolSize: 10,
        useFindAndModify: false,
      }
    )
    .then(() => {
      console.log(colors.blue(`[mongodb] is connedcted`));
    })
    .catch((err) => {
      console.log(colors.blue(`[mongodb] error: ${err}`));
    });

  return client;
};
