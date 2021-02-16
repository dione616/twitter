import { Request, Response, NextFunction } from "express";

interface RequestExt extends Request {
  user: string;
}

export const requireLogin = (req: any, res: Response, next: NextFunction) => {
  if (req && req.user) {
    return next();
  } else {
    console.log(req.query);

    return res.redirect(`/list`);
  }
};
