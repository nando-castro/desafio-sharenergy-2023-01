import { Router } from "express";
import * as authController from "../controllers/authController";
import validateUser from "../middlewares/validateUser";

const authRouter = Router();

authRouter.post("/signin", authController.signIn);
authRouter.use(validateUser);
authRouter.post("/signup", authController.signUp);

export { authRouter };
