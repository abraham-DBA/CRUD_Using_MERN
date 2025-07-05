import express from "express";
import { addNewCustomer, getCustomers } from "../controllers/customer.js";

const router = express.Router();

router.post("/add", addNewCustomer);
router.get("/", getCustomers);

export { router as customerRoute };
