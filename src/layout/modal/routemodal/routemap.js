import React from 'react'

import { Card } from '@mui/material'
import { styled } from "@mui/system"

const StyledRouteMapWrapper = styled(Card)(({ theme }) => ({
	width: "100%",
	minHeight: "40vh",
}))

const iframeStyle = {
	minHeight: "39.6vh",
	width: "100%",
	border: 0,
	borderRadius: "10px"
}

const RouteMap = () => {
	return (
		<StyledRouteMapWrapper>
			<iframe 
				style={iframeStyle}
				title='940 interactive map' 
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15955.051640243342!2d36.89947965!3d-1.3178965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1651539924879!5m2!1sen!2ske" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
		</StyledRouteMapWrapper>
	)
}

export default RouteMap