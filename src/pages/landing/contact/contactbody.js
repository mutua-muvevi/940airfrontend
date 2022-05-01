import { Box } from "@mui/material";
import React from 'react';
import { styled } from "@mui/system";

import ContactCards from "./contactcards/contactcards";
import ContactIframe from "./contactiframe";
import ContactTextForm from "./contacttextform/contacttextform";

const StyledContactBody = styled(Box)(({ theme }) => ({
	backgroundColor: theme.background.default,
	padding: "50px 0px"
}))

const ContactBody = () => {
	return (
		<StyledContactBody>
			<ContactCards/>
			<ContactIframe/>
			<ContactTextForm/>
		</StyledContactBody>
	)
}

export default ContactBody