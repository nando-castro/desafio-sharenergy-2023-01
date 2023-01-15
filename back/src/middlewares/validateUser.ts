import { NextFunction, Request, Response } from "express";
import { db } from "../databases/mongodb";
import jwt from "jsonwebtoken";

async function validateUser(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    return res.sendStatus(401);
  }

  res.locals.session = session;

  next();
}

export default validateUser;
