const Product = require("../models/Producto");

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json({ Products: products });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "No se pudo obtener los productos" });
  }
};

// Crear un producto
exports.createProduct = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      categoria, // Puede ser "Hardware", "Software" o "Servicios Profesionales"
      precio, // Tarifa establecida en USD
    } = req.body;
    const newProduct = await Product.create({
      nombre,
      descripcion,
      categoria,
      precio,
    });
    res.json({ newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al intentar crear el producto" });
  }
};

// Obtener un producto por su id
exports.getOneProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json({ Producto: product });
  } catch (error) {
    return res.status(500).json({ message: "No se pudo obtener el producto" });
  }
};

// Actualizar el producto por su id
exports.updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, categoria, precio } = req.body;
    const productUpdated = await Product.findByIdAndUpdate(
      id,
      {
        nombre,
        descripcion,
        categoria,
        precio,
      },
      { new: true }
    );
    res.json({ productUpdated });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al intentar actualizar el producto" });
  }
};

// Eliminar producto por su id
exports.deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const productDeleted = await Product.findByIdAndDelete(id);
    return res.json({ productDeleted });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al intentar eliminar el producto",
      error,
    });
  }
};
