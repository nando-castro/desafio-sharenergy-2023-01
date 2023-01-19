import { Request, Response } from "express";
import { db, objectId } from "../databases/mongodb";
import jwt from "jsonwebtoken";

export async function signIn(req: Request, res: Response) {
  const { username, password }: { username: string; password: string } =
    req.body;

  try {
    const userExists: { _id: string; username: string; password: string } =
      await db.collection("users").findOne({ username: username });

    if (!userExists) {
      return res.status(404).send("Usuário não cadastrado.");
    }

    if (userExists.password !== password) {
      return res.status(401).send("Senha ou usuário estão incorretos.");
    }

    const token = jwt.sign(
      { userId: userExists._id },
      `${process.env.JWT_SECRET}`,
      {
        expiresIn: 60 * 60,
      }
    );

    const session = await db
      .collection("sessions")
      .findOne({ userId: new objectId(userExists._id) });

    if (session !== null) {
      await db
        .collection("sessions")
        .deleteOne({ userId: new objectId(userExists._id) });

      await db.collection("sessions").insertOne({
        token: token,
        userId: new objectId(userExists._id),
      });
    } else {
      await db.collection("sessions").insertOne({
        token: token,
        userId: new objectId(userExists._id),
      });
    }

    return res.status(200).send({ token, username: userExists.username });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function signUp(req: Request, res: Response) {
  const {
    username,
    password,
    passwordConfirm,
  }: { username: string; password: string; passwordConfirm: string } = req.body;

  if (password.length === 0 || password === "") {
    return res.status(422).send("Preencha as informações corretamente!");
  }

  if (password !== passwordConfirm) {
    return res.status(422).send("Senhas devem ser iguais");
  }

  try {
    const userExists = await db
      .collection("users")
      .findOne({ username: username });

    console.log(userExists);
    if (userExists !== null) {
      return res.sendStatus(409);
    }

    await db.collection("users").insertOne({
      username: username,
      password: password,
    });

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}
