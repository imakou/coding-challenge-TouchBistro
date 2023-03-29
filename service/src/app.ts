import express, { Request, Response } from "express";
import { medianPrimeRoutes } from "./routes/medianPrimeRoutes";
import cors from "cors";

export const app = express();
const port = 3000;
// Allow cross-origin requests from any domain
app.use(cors());
app.use(medianPrimeRoutes);

app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});
