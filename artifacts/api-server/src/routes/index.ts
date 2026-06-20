import { Router, type IRouter } from "express";
import healthRouter from "./health";
import quoteRouter from "./quote";
import offersRouter from "./offers";

const router: IRouter = Router();

router.use(healthRouter);
router.use(quoteRouter);
router.use(offersRouter);

export default router;
