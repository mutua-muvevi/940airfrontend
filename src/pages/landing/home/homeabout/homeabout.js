import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import React from 'react'

import AgreementImage from "../../../../assets/images/illustrations/agreement.png"
import TitleSubtitle from "../../../../components/titlesubtitle"

import { homeAboutInfo } from "./homeaboutInfo";
import DoneIcon from '@mui/icons-material/Done';
import { styled } from "@mui/system";


const StyledBoxWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.background.default,
	minHeight: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}))

const styledIcon = {
	width: "100%",
	height: "60vh"
}

const HomeAbout = () => {
	return (
		<StyledBoxWrapper>
			<Container>
				<TitleSubtitle
					section = {homeAboutInfo.section}
					title = {homeAboutInfo.title}
					subtitle = {homeAboutInfo.subtitle}
				/>
				<Grid container columnSpacing={2}>
					<Grid item lg={7} xs={12}>
						<Typography style={{marginBottom: "30px"}} variant="h3">
							{ homeAboutInfo.body.title }
						</Typography>

						{
							homeAboutInfo.body.paragraphs.map((p, i) => (
								<Typography style={{margin: "20px auto"}} key={i} variant="body1">
									{p}
								</Typography>
							))
						}

						<List dense>
							{
								homeAboutInfo.body.lists.listItems.map((li, i) => (
									<ListItem key={i}>
										<ListItemIcon>
											<DoneIcon color="primary"/>
										</ListItemIcon>
										<ListItemText primary={li}/>
									</ListItem>
								))
							}
						</List>

					</Grid>
					<Grid item lg={5} xs={12}>
						<img 
							src={AgreementImage}
							alt="Aggreement when registering with 940 air cargo"
							style={styledIcon}
						/>
					</Grid>
				</Grid>
			</Container>
		</StyledBoxWrapper>
	)
}

export default HomeAbout