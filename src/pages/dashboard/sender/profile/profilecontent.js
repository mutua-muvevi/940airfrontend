import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export const profileLeftList = [
	{
		name: "Primary email",
		value: "email@mail.com",
		icon: <EmailIcon/>
	},
	{
		name: "Telephone",
		value: "+254 700 000 000",
		icon: <CallIcon/>
	},
	{
		name: "Lives at",
		value: "Nairobi, Kenya",
		icon: <HomeIcon/>
	},
]

export const profileEditFormContent = [
	{
		type: "text",
		label: "Firstname",
		required: true,
		name:"firstname",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "text",
		label: "Lastname",
		required: true,
		name:"lastname",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "email",
		label: "Email",
		required: true,
		name:"email",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "tel",
		label: "Telephone",
		required: true,
		name:"telephone",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "text",
		label: "city",
		required: true,
		name:"City",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "text",
		label: "Country",
		required: true,
		name:"country",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "text",
		label: "ID Number",
		required: true,
		name:"idnumber",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "text",
		label: "Caption",
		required: true,
		name:"caption",
		xs:12,
		sm:12,
		md:6,
		lg:6,
		xl:6,
		multiline: false,
		rows: 0
	},
	{
		type: "text",
		label: "Description",
		required: true,
		name:"description",
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12,
		multiline: true,
		rows: 0
	},
	// {
	// 	type: "text",
	// 	label: "usertype",
	// 	required: true,
	// 	name:"usertype",
	// 	xs:12,
	// 	sm:12,
	// 	md:4,
	// 	lg:4,
	// 	xl:4,
	// 	multiline: false,
	// 	rows: 0
	// },
]