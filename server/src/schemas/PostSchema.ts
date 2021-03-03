import mongoose, { Document, Model } from "mongoose";

const Schema = mongoose.Schema;

const TwittSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 2000,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    pinned: Boolean,
  },
  { timestamps: true }
);

export const Twitt = mongoose.model("Twitt", TwittSchema);
