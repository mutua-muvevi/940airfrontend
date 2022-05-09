import Truck from "../../../../assets/images/truck.png";
import Van from "../../../../assets/images/van.png";
import MiniTruck from "../../../../assets/images/minitruck.png";
import Pickup from "../../../../assets/images/pickup.png";

import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const vehicleCards = [
	{
		body : {
			vehicle: {
				src: Truck,
				alt: "vehicle one"
			},
			owner: "Emmanuel Surname",
			allOwnerVehiclesIcons: [
				<TwoWheelerIcon/>,
				<DirectionsCarIcon/>
			]
		},
		status: "driving",
		ratings: 4,
		footer : {
			vehicleId: "VEHICLE ID: 2342D3",
		}
	},
	
	{
		body : {
			vehicle: {
				src: Van,
				alt: "vehicle two"
			},
			owner: "Sharon Name",
			allOwnerVehiclesIcons: [
				<TwoWheelerIcon/>
			]
		},
		status: "packing",
		ratings: 3.5,
		footer : {
			vehicleId: "VEHICLE ID: 2342D3",
		}
	},
	
	{
		body : {
			vehicle: {
				src: MiniTruck,
				alt: "vehicle six"
			},
			owner: "Wilson Nameoid",
			allOwnerVehiclesIcons: [
				<TwoWheelerIcon/>,
				<LocalShippingIcon/>,


			]
		},
		status: "loading",
		ratings: 4.0,
		footer : {
			vehicleId: "VEHICLE ID: 2342D3",
		}
	},	
	
	{
		body : {
			vehicle: {
				src: Pickup,
				alt: "vehicle three"
			},
			owner: "Reuben Nomeclature",
			allOwnerVehiclesIcons: [
				<TwoWheelerIcon/>,
				<LocalShippingIcon/>,
				<DirectionsCarIcon/>
			]
		},
		status: "driving",
		ratings: 4.5,
		footer : {
			vehicleId: "VEHICLE ID: 2342D3",
		}
	},
]

export const starRatings = {
	0.5: 'Painfully Bad',
	1: 'Very Bad',
	1.5: 'Bad',
	2: 'Poor',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
}