import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updatingProduct,
  deleteOneProduct,
  deleteAllProducts,
} from "../controllers/controllers.js";

const router = express.Router();

// CREATING A PRODUCT
router.post("/", createProduct);

// GET ALL PRODUCTS
router.get("/", getAllProducts);

// GET PRODUCT BY ID
router.get("/:id", getProductById);

// UPDATING A PRODUCT
router.put("/:id", updatingProduct);

// DELETING A PRODUCT
router.delete("/:id", deleteOneProduct);

// DELETING ALL PRODUCTS
router.delete("/", deleteAllProducts);

export default router;
