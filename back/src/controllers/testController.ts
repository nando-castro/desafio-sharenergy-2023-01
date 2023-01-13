import { Request, Response } from "express";
import * as testService from "../services/testService";

export async function createTest(req: Request, res: Response) {
  const response = await testService.createTest("Hello");
  res.status(200).send(response);
}
