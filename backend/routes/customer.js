import express from "express";
import {
  addNewCustomer,
  deleteCustomer,
  getCustomers,
} from "../controllers/customer.js";

const router = express.Router();

router.post("/add", addNewCustomer);
router.get("/", getCustomers);
router.delete("/:id", deleteCustomer);

export { router as customerRoute };
