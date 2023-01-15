import { Request, Response } from "express";
import { db, objectId } from "../databases/mongodb";

export async function createClient(req: Request, res: Response) {
  const client = req.body;
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    return res.sendStatus(401);
  }
  await db.collection("clients").insertOne({ ...client });

  res.sendStatus(201);
}
export async function getClients(req: Request, res: Response) {
  const session = res.locals.session;

  const clients = await db.collection("clients").find().toArray();

  res.status(200).send(clients);
}
export async function updateClient(req: Request, res: Response) {
  const id = req.params.id;
  const data = req.body;

  try {
    const client = await db
      .collection("clients")
      .findOne({ _id: new objectId(id) });

    if (!client) {
      return res.sendStatus(404);
    }

    await db
      .collection("clients")
      .updateOne({ _id: client._id }, { $set: req.body });

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}
export async function deleteClient(req: Request, res: Response) {
  const id = req.params.id;

  const value = await db
    .collection("clients")
    .findOne({ _id: new objectId(id) });

  if (value === null) {
    return res.sendStatus(404);
  }

  try {
    await db.collection("clients").deleteOne({ _id: new objectId(id) });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}
