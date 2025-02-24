import express from "express";
import { Product } from "../Model/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Success in creation", product });
    console.log(`Succussfully Created new product : ${product}`);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: "Product not found" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!id) {
      res.send("Product not Found!!!");
    }
    res.status(200).json({ message: "Product Found", product });
  } catch (error) {
    res.status(404).josn({ error: error.message });
  }
};

export const updatingProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      res.send("Product not Found!!!");
    }
    res.status(200).json({ message: "Product Updated", product });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.send("Product not Found!!!");
    }
    res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteAllProducts = async (req, res) => {
  try {
    const product = await Product.deleteMany({}); // Deletes all products

    res.status(200).json({
      message: "All products deleted successfully",
      deletedCount: product.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
