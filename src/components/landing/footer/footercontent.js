import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const footerContent = {
	left: {
		title: "940 On Truck",
		paragraph: [
			"Elit commodo eiusmod et ipsum occaecat aliqua cupidatat dolore commodo. Amet eu anim non adipisicing magna amet",
			"magna cillum elit sunt do. Cillum eu mollit exercitation cillum incididunt ipsum."
		],
		button: {
			text: "Explore more",
			link: "#"
		}
	},
	middle: {
		title: "Important Links",
		paragraph: "Elit commodo eiusmod et ipsum occaecat aliqua cupidatat dolore commodo. Amet eu anim non adipisicing magna amet",
		links: [
			{
				text: "home",
				link:"#"
			},
			{
				text: "about",
				link:"#"
			},
			{
				text: "contact",
				link:"#"
			},
			{
				text: "login",
				link:"#"
			},
		]
	},
	right: {
		title: "Contact Info",
		paragraph: "Elit commodo eiusmod et ipsum occaecat aliqua cupidatat dolore commodo. Amet eu anim non adipisicing magna amet",
		contactItems: [
			{
				icon: <LocationOnIcon/>,
				text: "Address, Nairobi Kenya"
			},
			{
				icon: <LocalPhoneIcon/>,
				text: "+2547000000"
			},
			{
				icon: <EmailIcon/>,
				text: "email@mail.com"
			},
		]
	}
}

export const footerSocialIcons = [
	{
		icon: <FacebookIcon/>,
		link: "https://www.facebook.com/"
	},
	{
		icon: <TwitterIcon/>,
		link: "https://www.twitter.com"
	},
	{
		icon: <InstagramIcon/>,
		link: "https://www.instagram.com"
	},
	{
		icon: <LinkedInIcon/>,
		link: "https://www.linkedin.com"
	},
]