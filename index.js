// Importamos las librerías necesarias
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db.js");

const productRouter = require("./routes/productRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const port = process.env.PORT || 4000

require("dotenv").config();

connectDB();

// Declaramos los middlewares
app.use(cors());
app.use(express.json());

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

// Determinamos el servidor
app.listen(port, () => {
  console.log(`el servidor está corriendo en el puerto ${port}`);
});
