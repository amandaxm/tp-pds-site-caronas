import mongoose, { Mongoose } from 'mongoose';
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = async (): Promise<Mongoose> =>
  await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.tjoqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  , {
    autoIndex: true,
    autoCreate: true,
  });

export { connect };
