require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error al conectar a MongoDB:", err));

// Modelo de datos
const Dato = mongoose.model("Dato", new mongoose.Schema({
  nombre: String,
}));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Ruta GET para la raíz
app.get("/", (req, res) => {
  res.status(200).send("¡Bienvenidos a nuestro portal web!"); // Respuesta 200 OK
});

// Ruta POST para guardar un dato
app.post("/api/datos", async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre || nombre.length < 3) {
      return res.status(400).send("Nombre inválido");
    }

    const nuevo = new Dato({ nombre });
    await nuevo.save();

    res.sendStatus(201); // Éxito
  } catch (error) {
    console.error("Error al guardar:", error);
    res.status(500).send("Error al guardar el dato");
  }
});

// Export para pruebas
module.exports = app; // Usamos module.exports en lugar de export default

// Servidor (solo si no es importado por Jest)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}