import { Box } from "@mui/material"

import Cardtable from "./cardtable"
import FullTable from "./fulltable"
import VehicleCards from "./vehiclecards"

const SenderHome = () => {
	return(
		<Box>
			<VehicleCards/>
			<Cardtable/>
			<FullTable/>
		</Box>
	)
}

export default SenderHome