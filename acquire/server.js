// server.js
// Entry point del servicio ACQUIRE
require("dotenv").config();

const express = require("express");
const acquireRoutes = require("./routes/acquireRoutes");
const { init } = require("./services/db");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT_ACQUIRE;

const app = express();
app.use(express.json());

// Rutas del servicio ACQUIRE
app.use("/", acquireRoutes);

// Arranque del servidor + carga de mongoDB
app.listen(PORT, async () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`[ACQUIRE] Servicio escuchando en ${serverUrl}`);

  try {
    await init(MONGO_URI);
  } catch (err) {
    console.error("Error al conectarse a mongoDB:", err);
    process.exit(1);
  }
});
