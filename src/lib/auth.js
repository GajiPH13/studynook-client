import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb+srv://gajinajrul_admin_MDB:r_awS4zY3SYZZDZ@cluster0.joj0lth.mongodb.net/?appName=Cluster0");
const db = client.db('studynook');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    
    client
  }),
  emailAndPassword:{
    enabled: true,
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});