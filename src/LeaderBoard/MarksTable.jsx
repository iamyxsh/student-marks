import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
})

export default function MarksTable({ marks }) {
	const classes = useStyles()

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Roll</TableCell>
						<TableCell align="right">Physics</TableCell>
						<TableCell align="right">Maths</TableCell>
						<TableCell align="right">Chemistry</TableCell>
						<TableCell align="right">Total</TableCell>
						<TableCell align="right">Percentage</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{marks.length > 0 &&
						marks.map((row) => (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.roll}
								</TableCell>
								<TableCell align="right">{row.physics}</TableCell>
								<TableCell align="right">{row.maths}</TableCell>
								<TableCell align="right">{row.chem}</TableCell>
								<TableCell align="right">{row.total}</TableCell>
								<TableCell align="right">{row.percentage}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
