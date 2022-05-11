import { GiCarWheel } from "react-icons/gi"

export const vehicleGridSegment = [
	{
		name: "Range",
		value: 500,
		unit: "km",
		icons: [
			
		],
	},
	{
		name: "No of wheels",
		value: 6,
		unit: "",
		icons: [
			<GiCarWheel/>,
			<GiCarWheel/>,
			<GiCarWheel/>,
			<GiCarWheel/>,
			<GiCarWheel/>,
			<GiCarWheel/>,
		],
	},
	{
		name: "Volume capacity",
		value: 30,
		unit: "m3",
		icons: [

		],
	},
	{
		name: "Years of service",
		value: 3,
		unit: "years",
		icons: [

		],
	},
]

const createData = (date, pickup, delivery, status) => {
	return { date, pickup, delivery, status };
}

const vehicleTableBody = [
	createData("21/02/2021", "Nairobi", "Thika", "completed"),
	createData("21/02/2021", "Nairobi", "Machakos", "completed"),
	createData("21/02/2021", "Mombasa", "Lodwar", "pending"),
];


const vehicleTableHead = [
	{
		text: "Date",
		align: "left"
	},
	{
		text: "Pickup point",
		align: "left"
	},
	{
		text: "Delivery point",
		align: "left"
	},
	{
		text: "Status",
		align: "right"
	},
]

const vehicleRows = [ "date", "pickup", "delivery", "status" ]

export const vehicleTable = {
	tableHeader: vehicleTableHead,
	tableBody: vehicleTableBody,
	tableRows: vehicleRows
}

