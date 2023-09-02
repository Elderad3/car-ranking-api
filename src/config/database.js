require('dotenv').config()

module.exports = {
  "username": process.env.MYSQLUSER,
  "password": process.env.MYSQLPASSWORD,
  "database": process.env.MYSQLDATABASE,
  "host": process.env.MYSQLHOST,
  "port": process.env.MYSQLPORT,
  "dialect": process.env.DB_DIALECT,
  "dialectOptions": {
    "ssl": {
      "require": true,
      "rejectUnauthorized": false
    }
  },
  "operatorsAliases": false,
  "define": {
    "timestamps": false,
    "underscored": true,
    "underscoredAll": true
  }
}
