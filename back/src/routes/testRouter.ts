import { Router } from "express";
import * as testController from "../controllers/testController";

const testRouter = Router();

testRouter.get("/test", testController.createTest);

export { testRouter };
