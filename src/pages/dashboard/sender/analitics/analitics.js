import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import DashCard4 from '../../../../layout/cards/dashcard4';
import TableCard from "../../../../layout/cards/tablecard";
import { analiticsInfo } from './analiticsinfo';

const StyledCard = styled(Box)(({ theme }) => ({
	minHeight: "30vh",
	margin: "30px 0px"
}))

const Analitics = () => {
	return (
		<Box>
			<Grid container spacing={2}>
				{
					analiticsInfo.map((el, i) => (
						<Grid item lg={4} md={4} sm={12} xs={12}>
							<DashCard4 info={el} key={i}/>
						</Grid>
					))
				}
				<Grid  item lg={12} md={12} sm={12} xs={12}>
					{
						[1,2,3,4].map((el) => (
							<StyledCard>
								<TableCard style={{height: "100%"}}/>
							</StyledCard>
						))
					}
				</Grid>
			</Grid>
		</Box>
	)
}

export default Analitics