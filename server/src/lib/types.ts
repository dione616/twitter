import { Collection } from "mongodb";
import { Document } from "mongoose";

export interface User extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface Database {
  users: Collection<User>;
}
