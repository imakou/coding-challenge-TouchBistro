import { Request, Response } from "express";
import { getMedianPrimeNumbers } from "../services/medianPrimeService";

export const medianPrimeController = (req: Request, res: Response) => {
  // Replace this with your own logic to calculate the median prime
  const { upperLimit } = req.query;
  const medianPrimeNumbers = getMedianPrimeNumbers(upperLimit as string);

  res.send({ data: medianPrimeNumbers });
};
