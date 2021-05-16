import { Button, Grid, Paper, TextField } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import fetchCall from "../utils/fetchCall"

const AddMarks = () => {
	const history = useHistory()

	const [maths, setMaths] = useState(0)
	const [roll, setRoll] = useState(null)
	const [physics, setPhysics] = useState(0)
	const [chem, setChem] = useState(0)
	const [total, setTotal] = useState(null)
	const [percentage, setPercentage] = useState(null)
	const [err, setErr] = useState("")

	const makeError = (e) => {
		setErr(e)
		setTimeout(() => {
			setErr("")
		}, [5000])
	}

	useEffect(() => {
		const t = parseInt(maths) + parseInt(chem) + parseInt(physics)
		setTotal(t)
		const p = (t / 300) * 100
		setPercentage(p)
	}, [maths, chem, physics])

	const handleSubmit = async () => {
		if (!roll || !maths || !physics || !chem) {
			makeError("Please fill out every field.")
		} else if (
			parseInt(roll) > 1000 ||
			parseInt(maths) > 100 ||
			parseInt(physics) > 100 ||
			parseInt(chem) > 100
		) {
			makeError("Please clear out the error/s.")
		} else {
			const data = await fetchCall("POST", {
				roll,
				physics,
				maths,
				chem,
				total,
				percentage,
			})
			if (data.msg !== "Created") {
				makeError(data.msg.split(":")[1].toUpperCase())
			} else {
				history.push("/")
			}
		}
	}

	return (
		<Paper
			elevation={5}
			style={{
				width: "70vw",
				minWidth: "20rem",
				margin: "5rem auto",
				padding: "2rem",
			}}
		>
			{err ? (
				<h1 style={{ width: "100%", textAlign: "center" }}>{err}</h1>
			) : undefined}
			<Grid container alignItems="center" spacing={2}>
				<Grid item xs={6}>
					<TextField
						label="Roll"
						type="number"
						value={roll}
						onChange={(e) => setRoll(e.target.value)}
						error={parseInt(roll) > 1000 ? true : false}
						helperText={
							parseInt(roll) > 1000
								? "Roll cannot be more than 1000."
								: undefined
						}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label="Maths"
						type="number"
						value={maths !== 0 ? maths : null}
						onChange={(e) => setMaths(e.target.value)}
						error={parseInt(maths) > 100 ? true : false}
						helperText={
							parseInt(maths) > 100
								? "Marks cannot be more than 100."
								: undefined
						}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label="Physics"
						type="number"
						value={physics !== 0 ? physics : null}
						onChange={(e) => setPhysics(e.target.value)}
						error={parseInt(physics) > 100 ? true : false}
						helperText={
							parseInt(physics) > 100
								? "Marks cannot be more than 100."
								: undefined
						}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label="Chemistry"
						type="number"
						value={chem !== 0 ? chem : null}
						onChange={(e) => setChem(e.target.value)}
						error={parseInt(chem) > 100 ? true : false}
						helperText={
							parseInt(chem) > 100
								? "Marks cannot be more than 100."
								: undefined
						}
					/>
				</Grid>
				<Grid item xs={6}>
					Total : {total ? total : 0}
				</Grid>
				<Grid item xs={6}>
					Percentage : {percentage} %
				</Grid>
			</Grid>
			<Button
				style={{ margin: "2rem auto 0" }}
				color="primary"
				variant="contained"
				onClick={handleSubmit}
			>
				Submit
			</Button>
		</Paper>
	)
}

export default AddMarks
