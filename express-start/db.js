const Pool = require('pg').Pool
const pool = new Pool({
  user: "nurbek",
  password: "Alfabeta100$",
  port: 5432,
  database: "nodeexpress"
})

module.exports = pool