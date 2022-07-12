const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");

const db = new Client({ connectionString: getDatabaseUri() });

db.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to db");
  }
});

module.exports = db;
