import { Card, Container } from "@mui/material"
import React from 'react'
import { styled } from "@mui/system"

const StyledIframeContainer = styled(Container)(({ theme }) => ({
	margin: "30px auto"
}))

const StyledIframeCard = styled(Card)(({ theme }) => ({
	borderRadius: 4,
	width: "100%",
	height: "75vh",
	padding: "0px !important"
}))

const iframeStyle = {
	border: 0,
	width: "100%",
	height: "100%"
}

const ContactIframe = () => {
	return (
		<StyledIframeContainer>
			<StyledIframeCard>
				<iframe 
					title="940 air map location" 
					src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3988.801683754452!2d36.813574880544266!3d-1.2934604691881373!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1651363700089!5m2!1sen!2ske"
					allowfullscreen="" 
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"
					style={iframeStyle}
				>
				</iframe>
			</StyledIframeCard>
		</StyledIframeContainer>
	)
}

export default ContactIframe
