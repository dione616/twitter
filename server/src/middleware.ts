import { Request, Response, NextFunction } from "express";
import session from "express-session";

export const requireLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("HERE0", req.session);
  if (req.session.user) {
    console.log("HERE1");
    return next();
  } else {
    console.log("HERE2");
  }
};
