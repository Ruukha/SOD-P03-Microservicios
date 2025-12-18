'use strict';

const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
  features: {
    type: [Number],
    required: true
  },
  meta: {
    type: Object,
    required: true
  },
  prediction: {
    type: Number,
    required: true
  },
  modelVersion: {
    type: String,
    required: true
  },
  latencyMs: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("prediction", predictionSchema);
