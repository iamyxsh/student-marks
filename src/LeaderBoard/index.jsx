import React, { useEffect, useState } from "react"
import { Button, Grid, TextField } from "@material-ui/core"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useHistory } from "react-router"

import fetchCall from "../utils/fetchCall"
import MarksTable from "./MarksTable"

const LeaderBoard = () => {
	const history = useHistory()

	const [marks, setMarks] = useState([])
	const [offset, setOffset] = useState(0)
	const [roll, setRoll] = useState(undefined)
	const [order, setOrder] = useState("DESC")
	const [sort, setSort] = useState("percentage")
	const [dis, setDis] = useState(false)

	useEffect(() => {
		const getMarks = async () => {
			const data = await fetchCall("GET", null, 10, offset, sort, order, roll)
			setMarks(data)
			if (data.length < 10) setDis(true)
			if (data.length === 10) setDis(false)
		}

		getMarks()
	}, [offset, sort, order, roll])

	return (
		<Grid container>
			<Grid container style={{ margin: "1rem auto" }} item xs={8}>
				<Grid item xs={3}>
					<FormControl>
						<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
						<Select
							style={{ minWidth: "10rem" }}
							value={sort}
							onChange={(e) => {
								setOffset(0)
								setSort(e.target.value)
							}}
						>
							<MenuItem value={"roll"}>Roll</MenuItem>
							<MenuItem value={"physics"}>Physics</MenuItem>
							<MenuItem value={"chem"}>Maths</MenuItem>
							<MenuItem value={"total"}>Total</MenuItem>
							<MenuItem value={"percentage"}>Percentage</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={3}>
					<FormControl>
						<InputLabel id="demo-simple-select-label">Order</InputLabel>
						<Select
							style={{ minWidth: "10rem" }}
							value={order}
							onChange={(e) => {
								setOffset(0)
								setOrder(e.target.value)
							}}
						>
							<MenuItem value={"ASC"}>ASC</MenuItem>
							<MenuItem value={"DESC"}>DESC</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={3}>
					<TextField
						style={{ minWidth: "10rem" }}
						onChange={(e) => {
							setOffset(0)
							setRoll(e.target.value)
						}}
						type="number"
						label="Search by Roll"
					/>
				</Grid>
				<Grid item xs={3}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => history.push("/add")}
						style={{ marginTop: "0.7rem" }}
					>
						ADD
					</Button>
				</Grid>
			</Grid>
			<Grid style={{ margin: "5rem auto" }} item xs={8}>
				<MarksTable marks={marks} />
			</Grid>
			<Grid
				item
				style={{ margin: "2rem auto" }}
				container
				xs={10}
				justify="space-between"
				alignItems="center"
			>
				<Grid item>
					<Button
						disabled={offset === 0 ? true : false}
						onClick={() => setOffset((prev) => prev - 1)}
						color="secondary"
						variant="contained"
					>
						Previous
					</Button>
				</Grid>
				<Grid item>
					<Button
						disabled={dis}
						onClick={() => setOffset((prev) => prev + 1)}
						color="primary"
						variant="contained"
					>
						Next
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default LeaderBoard
