import { Box, Button, Container, Grid, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { styled } from "@mui/system";
import React from 'react';
import moment from "moment"
import { footerContent, footerSocialIcons } from "./footercontent";

const StyledCopyRight = styled(Box)(({theme}) => ({
	backgroundColor: "black",
	color: "white"
}))

const StyledCopyrightItems = styled(Toolbar)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between"
}))

const StyledListItemText = styled(ListItemText)(({theme}) => ({
	marginLeft: "5px",
	textTransform: "capitalize"
}))

const Footer = () => {
	return (
		<Box component="footer">
			<Box>
				<Container>
					<Grid container>
						<Grid item lg={4} sm={12} xs={12}>
							<Typography variant="h3" gutterBottom>
								{footerContent.left.title}
							</Typography>
							{
								footerContent.left.paragraph.map((p, i) => (
									<Typography key={i} variant="body1">
										{p}
									</Typography>
								))
							}
							<Button variant="contained">
								{footerContent.left.button.text}
							</Button>
						</Grid>

						<Grid item lg={4} sm={12} xs={12}>
							<Typography variant="h3" gutterBottom>
								{footerContent.middle.title}
							</Typography>

							<Typography variant="body1" gutterBottom>
								{ footerContent.middle.paragraph }
							</Typography>

							
							<List>
								{
									footerContent.middle.links.map((p, i) => (
										<ListItem disablePadding>
											<ListItemButton>
												<DoubleArrowIcon/>
												<StyledListItemText primary={p.text} />
											</ListItemButton>
										</ListItem>
									))
								}
							</List>

						</Grid>

						<Grid item lg={4} sm={12} xs={12}>
							<Typography variant="h3" gutterBottom>
								{footerContent.right.title}
							</Typography>

							<List>
								{
									footerContent.right.contactItems.map((p, i) => (
										<ListItem disablePadding>
											<ListItemButton>
												<DoubleArrowIcon/>
												<StyledListItemText primary={p.text} />
											</ListItemButton>
										</ListItem>
									))
								}
							</List>

							
						</Grid>
					</Grid>
				</Container>
			</Box>

			<StyledCopyRight>
				<Container>
					<StyledCopyrightItems>
						<Typography variant="body1">
							Copyright 2022
						</Typography>
						<Box>
							{
								footerSocialIcons.map((el, i) => (
									<Link target="_blank" rel="noopener" href={el.link}>
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