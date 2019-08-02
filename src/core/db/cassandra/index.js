const cassandra = require("cassandra-driver");
const { cassandraCx } = require("../../config/default.json");
const client = new cassandra.Client({
  ...cassandraCx
});

module.exports = client;
