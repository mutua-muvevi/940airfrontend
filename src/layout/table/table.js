import React from 'react'

import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from "@mui/system";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
	margin: "10px auto"
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#242c64",
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
	  backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
	  border: 0,
	},
  }));

const TableComponent = ({ table }) => {
	return (
		<StyledTableContainer component={Paper} >
			<Table>
				<TableHead>
					<TableRow>
						{
							table.tableHeader.map((header, i) => (
								<StyledTableCell key={i} align={header.align} >{header.text}</StyledTableCell>
							))
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						table.tableBody.map((row, i) => (
							<StyledTableRow key={i}>
								<StyledTableCell component="th" scope="row">
									{row.date}
								</StyledTableCell>
								<StyledTableCell align="left">{row.pickup}</StyledTableCell>
								<StyledTableCell align="left">{row.delivery}</StyledTableCell>
								<StyledTableCell align="right">{row.status}</StyledTableCell>
							</StyledTableRow>
						))
					}
				</TableBody>
			</Table>
		</StyledTableContainer>
	)
}

export default TableComponent