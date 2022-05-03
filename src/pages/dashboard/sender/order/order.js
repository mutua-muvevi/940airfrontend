import styled from '@emotion/styled'
import { Box, Card, Grid } from '@mui/material'
import React from 'react'
import IdCards from '../../../../layout/cards/idcards'

const StyledGridMap = styled(Grid)(({ theme }) => ({
	minHeight: "85vh",
}))

const StyledCards = styled(Card)(({ theme }) => ({
	minHeight: "85vh",
}))


const iframeStyle = {
	width: "100%",
	minHeight: "85vh",
	border: 0,
	borderRadius: "10px",
}

const StyledGridCards = styled(Grid)(({ theme }) => ({
	overflowY: "scroll",
	height: "85vh",
}))

const Order = () => {
	return (
		<Box>
			<Grid container spacing={2}>
				<StyledGridMap item xl={7} lg={7} md={7} sm={12} xs={12}>
					<StyledCards>
						<iframe 
							style={iframeStyle}
							title='940 interactive map' 
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15955.051640243342!2d36.89947965!3d-1.3178965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1651539924879!5m2!1sen!2ske" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
					</StyledCards>
				</StyledGridMap>
				<StyledGridCards item xl={5} lg={5} md={5} sm={12} xs={12}>
					{
						[1,2,3,4, 5,6,7].map((i) => (
							<IdCards key={i}/>
						))
					}
				</StyledGridCards>
			</Grid>
		</Box>
	)
}

export default Order