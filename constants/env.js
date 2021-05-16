require("dotenv").config()

const SQL_USERNAME = process.env.SQL_USERNAME
const SQL_DBNAME = process.env.SQL_DBNAME
const SQL_DBPASSWORD = process.env.SQL_DBPASSWORD
const SQL_SERVER = process.env.SQL_SERVER
const SQL_PORT = process.env.SQL_PORT
const MODE = process.env.MODE
const PORT = process.env.PORT

module.exports = {
	SQL_USERNAME,
	SQL_DBNAME,
	SQL_DBPASSWORD,
	SQL_SERVER,
	SQL_PORT,
	MODE,
	PORT,
}
