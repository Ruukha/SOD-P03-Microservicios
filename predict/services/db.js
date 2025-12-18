'use strict';

const mongoose = require("mongoose");

let connection = null;

async function init(uri) {
  if (connection) return connection;

  connection = await mongoose.connect(uri);

  console.log("[DB] Conectado a Mongo en", uri);
  return connection;
}

function acquire() {
  if (!connection) {
    throw new Error("Intento de usar DB antes de inicializarla");
  }
  return connection;
}

module.exports = {
  init,
  acquire
};
