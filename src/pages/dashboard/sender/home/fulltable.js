import React from 'react';

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import TableCard from "../../../../layout/cards/tablecard";

const TableWrapper = styled(Box)(({ theme }) => ({
	marginTop: "10px",
	marginBottom: "10px",
	height: "75vh"
}))

const FullTable = () => {
	return (
		<TableWrapper>
			<TableCard/>
		</TableWrapper>
	)
}

export default FullTable