const mysql = require("mysql")
const {
	SQL_SERVER,
	SQL_USERNAME,
	SQL_DBPASSWORD,
	SQL_DBNAME,
	SQL_PORT,
} = require("../constants/env")

const db = mysql.createConnection({
	host: SQL_SERVER,
	user: SQL_USERNAME,
	password: SQL_DBPASSWORD,
	database: SQL_DBNAME,
	port: SQL_PORT,
})

const dbConnection = () =>
	db.connect((err) => {
		if (err) throw err
		console.log("Database connected.")
	})

module.exports = { dbConnection, db }
