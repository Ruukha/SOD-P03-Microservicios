require("dotenv").config();

const express = require("express");
const orchestratorRoutes = require("./routes/orchestratorRoutes");

const PORT = process.env.PORT_ORCHESTRATOR;

const app = express();
app.use(express.json());
app.use("/", orchestratorRoutes);

app.listen(PORT, async () => {
    const serverUrl = `http://localhost:${PORT}`;
    console.log(`[ORCHESTRATOR] Servicio escuchando en ${serverUrl}`);
});