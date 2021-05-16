const errorController = (err, _, res) => {
	err.statusCode = err.statusCode || 500

	const stack = process.env.MODE === "DEVELOPMENT" ? err.stack : null

	return res
		.status(err.statusCode)
		.json({ status: "fail", payload: err.message, stack })
}

module.exports = errorController
