import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


import LockIcon from '@mui/icons-material/Lock';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const navbarContent = {
	logo: {

	},
	navItems: [
		{
			text: "home",
			path: "/landing/home",
			icon: <HomeIcon color="primary"/>,
			index: 0
		},
		{
			text: "about",
			path: "/landing/about",
			icon: <InfoIcon color="primary"/>,
			index: 1
		},
		{
			text: "contact",
			path: "/landing/contact",
			icon: <ContactSupportIcon color="primary"/>,
			index: 2
		},
	],
	navActionItems : [
		{
			text: "login",
			path: "/landing/home",
			icon: <LockIcon color="primary"/>,
			index: 3
		},
		{
			text: "signup",
			path: "/landing/home",
			icon: <HowToRegIcon color="primary"/>,
			index: 4
		},
	]
}