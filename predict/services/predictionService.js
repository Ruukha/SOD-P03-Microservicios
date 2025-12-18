'use strict';

const Prediction = require("../models/prediction");

async function savePrediction({ features, meta, prediction, modelVersion, latencyMs }) {
  const doc = new Prediction({
    features,
    meta,
    prediction,
    modelVersion,
    latencyMs
  });

  const saved = await doc.save();
  return saved;
}

// opcional, por si luego quieres ver el historial
async function listPredictions(limit = 50) {
  return Prediction
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
}

module.exports = {
  savePrediction,
  listPredictions
};
