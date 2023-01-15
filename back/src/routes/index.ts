import { Router } from "express";
import { authRouter } from "./authRouter";
import { clientRouter } from "./clientRouter";

const router = Router();

router.use(authRouter);
router.use(clientRouter);

export default router;
