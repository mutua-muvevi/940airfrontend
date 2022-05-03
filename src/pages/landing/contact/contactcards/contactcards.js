import { Container, Grid } from "@mui/material"
import React from 'react'
import { contactCardsInfo } from "./contactcardsinfo";
import ContactCardsItem from "../../../../layout/cards/contactcards";

const ContactCards = () => {
	return (
		<Container sx={{margin: "30px auto"}}>
			<Grid container spacing={2}>
				{
					contactCardsInfo.map((el, i) => (
						<Grid item lg={4} sm={12}>
							<ContactCardsItem icon={el.icon} title={el.title} items={el.items}/>
						</Grid>
					))
				}
			</Grid>
		</Container>
	)
}

export default ContactCards