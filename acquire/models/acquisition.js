'use strict';

const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
  dateStart: {
    type: Date,
    required: true
  },
  dateEnd: {
    type: Date,
    required: true
  },
  features: {
    type: [Number],
    required: true
  },
  columns: {
    type: [String],
    required: true
  },
  values: {
    type: [mongoose.Schema.Types.Mixed],
    required: true
  },
  latencyMs: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("acquisition", predictionSchema);
