import React from 'react';

import { Grid } from "@mui/material";
import { styled } from "@mui/system";

import PiechartCard from "../../../../layout/cards/piechartcard";
import TableCard from "../../../../layout/cards/tablecard";

const StyledCardsContainer = styled(Grid)(({ theme }) => ({
	marginTop: "10px",
	marginBottom: "10px",
}))

const StyledPieChartCard = styled(Grid)(({ theme }) => ({
	height: "60vh",
}))

const StyledTableCard = styled(Grid)(({ theme }) => ({
	height: "60vh",
}))

const Cardtable = () => {
	return (
		<StyledCardsContainer container spacing={2}>
			<StyledPieChartCard item lg={4} md={4} sm={12} xs={12}>
				<PiechartCard/>
			</StyledPieChartCard>
			<StyledTableCard item lg={8} md={8} sm={12} xs={12}>
				<TableCard/>
			</StyledTableCard>
		</StyledCardsContainer>
	)
}

export default Cardtable