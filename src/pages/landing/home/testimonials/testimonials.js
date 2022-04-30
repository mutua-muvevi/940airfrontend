import { Box, Container, Grid } from "@mui/material"
import React from 'react'
import TitleSubtitle from "../../../../components/titlesubtitle"
import TestimonialsCards from "../../../../layout/cards/testimonialscards";
import { testimonials } from "./testimonialsinfo";
import { styled } from "@mui/system";

const StyledTestimonials = styled(Box)(({theme}) => ({
	backgroundColor: theme.background.default,
	minHeight: "90vh",
	paddingBottom: "30px"
}))

const Testimonials = () => {
	return (
		<StyledTestimonials>
			<Container>
				<TitleSubtitle
					section={testimonials.section}
					title={testimonials.title}
					subtitle={testimonials.subtitle}
				/>
				<Grid container spacing={2}>
					{
						testimonials.body.map((el, i) => (
							<Grid key={i} item lg={4} sm={12} xs={12}>
								<TestimonialsCards
									name = {el.author.name}
									profession = {el.author.profession}
									image={el.image.src}
									alt={el.image.alt}
									text={el.text}
								/>
							</Grid>
						))
					}
				</Grid>
			</Container>
		</StyledTestimonials>
	)
}

export default Testimonials