import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb+srv://gajinajrul_admin_MDB:r_awS4zY3SYZZDZ@cluster0.joj0lth.mongodb.net/?appName=Cluster0");
const db = client.db('studynook');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword:{
    enabled: true,
  }
});