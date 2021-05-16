const express = require("express")

const errorController = require("./controllers/errorController")
const indexRouter = require("./routes/indexRouter")
const { PORT } = require("./constants/env")
const { dbConnection } = require("./database/sqlConnection")

dbConnection()

const app = express()

app.use(require("morgan")("dev"))
app.use(express.json())
app.use(require("cors")())

app.use("/api", indexRouter)

app.use(errorController)

const port = PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}.`))
