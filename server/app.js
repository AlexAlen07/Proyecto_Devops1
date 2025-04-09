require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modelo de datos
const Dato = mongoose.model("Dato", new mongoose.Schema({
  nombre: String,
}));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Rutas
app.post("/api/datos", async (req, res) => {
  // Validación del tamano del nombre
  if (!req.body.nombre || req.body.nombre.length < 3) {
    return res.status(400).send("Nombre inválido");
  }

  // Si la validación pasa, se guarda el dato en la base de datos
  const nuevo = new Dato({ nombre: req.body.nombre });
  await nuevo.save(); // Guarda en la base de datos
  res.sendStatus(201); // Respuesta de éxito
  res.status(500).send("Error al guardar"); // Error
});



// Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
