import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = `${process.env.MONGO_URI}`;
const client = new MongoClient(url);

const dbName = process.env.MONGO_DATABASE_NAME;

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  const insertResult = await collection.insertOne({
    username: "desafiosharenergy",
    password: "sh@r3n3rgy",
  });
  return "Seed🌱";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
