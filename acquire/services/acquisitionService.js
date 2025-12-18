'use strict';

const Acquisition = require("../models/acquisition");

async function saveAcquisition({ dateStart, dateEnd, columns, values, latencyMs }) {
  const doc = new Acquisition({
    dateStart,
    dateEnd,
    columns,
    values,
    latencyMs
  });

  const saved = await doc.save();
  return saved;
}

// opcional, por si luego quieres ver el historial
async function listAcquisition(limit = 50) {
  return Acquisition
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
}

module.exports = {
  saveAcquisition,
  listAcquisition
};
