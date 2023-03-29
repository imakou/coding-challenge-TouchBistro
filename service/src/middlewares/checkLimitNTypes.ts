import { Request, Response, NextFunction } from "express";

export const checkUpperLimitType = (req: Request, res: Response, next: NextFunction) => {
  const { upperLimit } = req.query;
  const isQueryValid = Number(upperLimit);

  if (!isQueryValid) {
    return res.status(400).send("The upperLimit parameter must be a number");
  }

  next();
};
