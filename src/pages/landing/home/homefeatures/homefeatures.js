import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react'
import TitleSubtitle from "../../../../components/titlesubtitle"
import CardSize4 from "../../../../layout/cards/cardsize4"
import { features } from "./homefeatureinfo"


const StyledContainer = styled(Container)(({theme}) => ({
	marginBottom: "50px"
}))

const HomeFeatures = () => {
	return (
		<Box id={features.id}>
			<StyledContainer>
				<TitleSubtitle
				 	section={features.section}
					title={features.title}
					subtitle={features.subtitle}
				/>
				<Grid container spacing={2}>
					{
						features.body.map((el, i) => (
							<Grid key={i} lg={4} sm={12} item>
								<CardSize4 
									icon={el.icon}
									title={el.title}
									text={el.text}
								/>
							</Grid>
						))
					}
				</Grid>
			</StyledContainer>
		</Box>
	)
}

export default HomeFeatures