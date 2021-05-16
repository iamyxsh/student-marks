const express = require("express")
const { postMarks, getLeaderBoard } = require("../controllers/marksController")

const indexRouter = express.Router()

indexRouter.post("/", postMarks)
indexRouter.get("/", getLeaderBoard)

module.exports = indexRouter
