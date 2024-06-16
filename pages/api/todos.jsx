// pages/api/todos.js
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("to-dos");

  switch (req.method) {
    case "GET":
      try {
        const todos = await db.collection("to-dos").find({}).toArray();
        res.status(200).json({ success: true, data: todos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const todo = await db.collection("to-dos").insertOne(req.body);
        res.status(201).json({ success: true, data: todo.ops[0] });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const { id } = req.query;
        await db.collection("to-dos").deleteOne({ _id: new ObjectId(id) });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
