import "dotenv/config";
import express from "express";
import cors from "cors";
import { customerRoute } from "./routes/customer.js";
import { dbConnect } from "./configs/dbConnection.js";

const port = 3000;
const app = express();
const db = dbConnect();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/customer", customerRoute);

app.listen(port, () => console.log(`Port start working on ${port}`));
