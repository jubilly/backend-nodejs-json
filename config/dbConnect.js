import mongoose from "mongoose";

async function pool() {
  mongoose.connect(process.env.MONGO_URI);
  return mongoose.connection;
}

export default pool;
