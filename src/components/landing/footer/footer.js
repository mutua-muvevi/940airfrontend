import { Box, Button, Container, Grid, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { styled } from "@mui/system";
import React from 'react';
import moment from "moment"
import { footerContent, footerSocialIcons } from "./footercontent";

const StyledTopContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	padding: "50px 0px"
}))

const StyledCopyRight = styled(Box)(({theme}) => ({
	backgroundColor: "black",
	color: "white"
}))

const StyledCopyrightItems = styled(Toolbar)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between"
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	justifyContent: "flex-start",
	minHeight: "40vh"
}))

const StyledListItemText = styled(ListItemText)(({theme}) => ({
	marginLeft: "5px",
	textTransform: "capitalize"
}))

const Footer = () => {
	return (
		<Box component="footer">
			<StyledTopContainer>
				<Container>
					<Grid container>
						<StyledGrid item lg={4} sm={12} xs={12}>
							<Typography variant="h3" style={{ marginBottom: "30px", }}>
								{footerContent.left.title}
							</Typography>
							{
								footerContent.left.paragraph.map((p, i) => (
									<Typography key={i} variant="body1">
										{p}
									</Typography>
								))
							}
							<Button variant="contained" sx={{ marginTop: "30px" }}>
								{footerContent.left.button.text}
							</Button>
						</StyledGrid>

						<StyledGrid item lg={4} sm={12} xs={12}>
							<Typography variant="h3" style={{ marginBottom: "30px", }}>
								{footerContent.middle.title}
							</Typography>

							<Typography variant="body1" style={{ marginBottom: "30px", }}>
								{ footerContent.middle.paragraph }
							</Typography>

							
							<List>
								{
									footerContent.middle.links.map((p, i) => (
										<ListItem key={i} disablePadding>
											<ListItemButton>
												<DoubleArrowIcon/>
												<StyledListItemText primary={p.text} />
											</ListItemButton>
										</ListItem>
									))
								}
							</List>

						</StyledGrid>

						<StyledGrid item lg={4} sm={12} xs={12}>
							<Typography variant="h3" style={{ marginBottom: "30px", }}>
								{footerContent.right.title}
							</Typography>

							<List>
								{
									footerContent.right.contactItems.map((p, i) => (
										<ListItem key={i} disablePadding>
											<ListItemButton>
												<DoubleArrowIcon/>
												<StyledListItemText primary={p.text} />
											</ListItemButton>
										</ListItem>
									))
								}
							</List>

							
						</StyledGrid>
					</Grid>
				</Container>
			</StyledTopContainer>

			<StyledCopyRight>
				<Container>
					<StyledCopyrightItems>
						<Typography variant="body1">
							Copyright {moment().format("YYYY")}
						</Typography>
						<Box>
							{
								footerSocialIcons.map((el, i) => (
									<Link key={i} target="_blank" rel="noopener" href={el.link}>
										{el.icon}
									</Link>
								))
							}
						</Box>
					</StyledCopyrightItems>
				</Container>
			</StyledCopyRight>
		</Box>
	)
}

export default Footer