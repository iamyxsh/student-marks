const fetchCall = async (method, body, limit, offset, sort, order, roll) => {
	if (!roll) roll = "undefined"
	return fetch(
		`${process.env.REACT_APP_API_URL}/api?order=${order}&limit=${limit}&offset=${offset}&sort=${sort}&roll=${roll}`,
		{
			method: `${method}`,
			headers: {
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : null,
		}
	).then((res) => res.json())
}

export default fetchCall
