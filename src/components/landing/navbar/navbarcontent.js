import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export const navbarContent = {
	logo: {

	},
	navItems: [
		{
			text: "home",
			path: "/landing/home",
			icon: <HomeIcon/>
		},
		{
			text: "about",
			path: "/landing/about",
			icon: <InfoIcon/>
		},
		{
			text: "contact",
			path: "/landing/contact",
			icon: <ContactSupportIcon/>
		},
	]
}