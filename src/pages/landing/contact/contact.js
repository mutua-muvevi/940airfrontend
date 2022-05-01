import { Box } from "@mui/material"
import React from 'react'
import ContactBanner from "./contactbanner/contactbanner"
import ContactBody from "./contactbody"

const Contact = () => {
	return (
		<Box>
			<ContactBanner/>
			<ContactBody/>
		</Box>
	)
}

export default Contact