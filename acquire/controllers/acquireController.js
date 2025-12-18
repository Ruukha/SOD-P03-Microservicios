const { fetchKunna } = require("../services/fetchKunnaService");
const { saveAcquisition } = require("../services/acquisitionService");

function health(req, res) {
  res.json({
    status: "ok",
    service: "acquire"
  });
}

async function acquire(req, res){
  const start = Date.now();
  const startDate = new Date();
  const target = new Date(startDate.getTime());
  if (target.getUTCHours() >= 23){
    target.setUTCDate(target.getUTCDate() + 1);
  }
  const dateEnd = new Date(Date.UTC(
    target.getUTCFullYear(),
    target.getUTCMonth(),
    target.getUTCDate(),
    0, 0, 0
  ));
  const dateStart = new Date(dateEnd.getTime() - 24 * 3600 * 1000 * 3);

  try {
    const { columns, values } = await fetchKunna(dateStart, dateEnd);
    const latencyMs = Date.now() - start;
    const timestamp = new Date().toISOString();

    const features = [values[0][2], values[1][2], values[2][2], target.getUTCHours(), target.getUTCDay(), target.getUTCMonth(), target.getUTCDate()];
    // console.log(features);

    const saved = await saveAcquisition({
      dateStart,
      dateEnd,
      features,
      columns,
      values,
      latencyMs
    });
    
    const acquisitionId = saved._id;
    res.status(201).json({
        acquisitionId,
        features,
        columns,
        values,
        timestamp,
        latencyMs
    });

  } catch (err) {
    console.error("Error en /acquire:", err);
    res.status(500).json({ error: "Internal error" });
  }
}

module.exports = {
    health,
    acquire
};