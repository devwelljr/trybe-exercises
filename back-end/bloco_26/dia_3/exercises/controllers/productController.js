const express = require("express");
const ProductService = require("../services/productService");

const router = express.Router();

router.get("/allProducts", async (_req, res, _next) => {
  const products = await ProductService.getAll();

  if(products.error) return res.status(Number(products.error.code)).send(products.error.message);

  res.status(200).send(products);
});

router.get("/getById/:id", async (req, res, _next) => {
  const { id } = req.params;

  const product = await ProductService.getById(id);

  if(product.error) return res.status(Number(product.error.code)).send(product.error.message);

  res.status(200).send(product);
});

router.post("/addUser", async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.addUser(name, brand);

  if(newProduct.error) return res.status(Number(newProduct.error.code)).send(newProduct.error.message);

  res.status(200).send(newProduct);
});

router.delete("/deleteUser/:id", async (req, res) => {
  const { id } = req.params;

  const product = await ProductService.exclude(id);

  res.status(200).send(product);
});

router.put("/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const product = await ProductService.update(id, name, brand);

  // if(product.error) return res.status(Number(product.error.code)).send(product.error.message);

  res.status(200).send(product);
});

module.exports = router;
