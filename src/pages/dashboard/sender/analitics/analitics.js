import { Box, Grid, Card } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import DashCard4 from '../../../../layout/cards/dashcard4';
import { analiticsInfo } from './analiticsinfo';

const StyledCard = styled(Card)(({ theme }) => ({
	padding: "10px",
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
								This is were the table will be displayed
							</StyledCard>
						))
					}
				</Grid>
			</Grid>
		</Box>
	)
}

export default Analitics