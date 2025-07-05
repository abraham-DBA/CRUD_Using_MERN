import mongoose from "mongoose";

async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URL);
}

dbConnect()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Error in Databse Connection", error);
  });

export { dbConnect };
