const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String
    },
    categoria: {
      type: String, 
      enum: ['Hardware', 'Software', 'Servicios profesionales'],
      required: true
    },
    precio: {
      type: Number, // En USD
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Producto', productSchema);

module.exports = Product;