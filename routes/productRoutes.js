const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getOneProductById,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/obtener-productos", getAllProducts);
productRouter.post("/crear-producto", createProduct);
productRouter.get("/obtener-producto/:id", getOneProductById);
productRouter.put("/actualizar-producto/:id", updateProductById);
productRouter.delete("/eliminar-producto/:id", deleteProductById);

module.exports = productRouter;
