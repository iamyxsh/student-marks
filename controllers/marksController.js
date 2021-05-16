const expressAsyncHandler = require("express-async-handler")
const { db } = require("../database/sqlConnection")

const postMarks = expressAsyncHandler(async (req, res) => {
	const { physics, maths, chem, total, percentage, roll } = req.body

	db.query(
		`INSERT INTO marks (physics, maths, chem, total, percentage, roll) VALUES(${parseInt(
			physics
		)}, ${parseInt(maths)}, ${parseInt(chem)}, ${parseInt(total)}, ${parseInt(
			percentage
		)},
		 ${parseInt(roll)})`,
		(err, _) => {
			if (err) {
				res.json({ msg: err.message })
			} else {
				res.json({ msg: "Created" })
			}
		}
	)
})

const getLeaderBoard = expressAsyncHandler(async (req, res) => {
	const { roll, limit, offset, sort, order } = req.query

	const whereRoll = `WHERE roll = ${parseInt(roll)}`

	db.query(
		`SELECT * FROM marks ${
			roll !== "undefined" ? whereRoll : undefined
		} ORDER BY ${sort} ${order} LIMIT ${parseInt(limit)} OFFSET ${
			parseInt(offset) * parseInt(limit)
		}`,
		(err, result) => {
			if (err) {
				res.json({ msg: err.message })
			} else {
				res.json(result)
			}
		}
	)
})

module.exports = {
	postMarks,
	getLeaderBoard,
}
