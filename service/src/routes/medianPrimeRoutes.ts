import { Router } from "express";
import { medianPrimeController } from "../controllers/medianPrimeController";
import { checkUpperLimitType } from "../middlewares/checkLimitNTypes";

const router = Router();

router.get("/median-prime", checkUpperLimitType, medianPrimeController);

export { router as medianPrimeRoutes };
