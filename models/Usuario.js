// Importación de librería necesaria
const mongoose = require("mongoose");

// Creación del esquema Usuario
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", userSchema);

// Exportación del modelo
module.exports = Usuario;
