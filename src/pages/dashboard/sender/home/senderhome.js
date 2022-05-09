import { Box, Typography } from "@mui/material"
import VehicleCards from "./vehiclecards"

const SenderHome = () => {
	return(
		<Box>
			<VehicleCards/>
			<Typography variant="body1">one card 4, one dashboard 8</Typography>
			<Typography variant="body1">full ssze table</Typography>
		</Box>
	)
}

export default SenderHome