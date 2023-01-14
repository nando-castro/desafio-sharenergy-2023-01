import { Router } from "express";
import * as authController from "../controllers/authController";

const authRouter = Router();

authRouter.post("/signin", authController.signIn);

export { authRouter };
