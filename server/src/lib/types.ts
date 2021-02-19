import { Collection } from "mongodb";
import { Document } from "mongoose";

export interface User extends Document {
  firstname: string;
  lastname: string;
  email: string;
  token: string;
}

export interface Database {
  users: Collection<User>;
}
export interface IDecoded {
  email: string;
  password: string;
  iat: number;
}
