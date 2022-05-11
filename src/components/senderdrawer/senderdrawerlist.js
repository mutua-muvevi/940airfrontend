import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArticleIcon from '@mui/icons-material/Article';
import MapIcon from '@mui/icons-material/Map';

import SettingsIcon from '@mui/icons-material/Settings';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';

const sx= {
	minWidth: 0,
	// mr: open ? 3 : 'auto',
	justifyContent: 'center',
}

export const listItemsTop = [
	{
		label: "Dashboard",
		path: "/admin/sender/home",
		icon: <HomeIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Tracking",
		path: "/admin/sender/tracking",
		icon: <MapIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "History",
		path: "/admin/sender/analitics",
		icon: <AccessTimeIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Order",
		path: "/admin/sender/order",
		icon:  <ArticleIcon sx={sx}/>,
		nested: [
			{}
		],
	}
]

export const listItemsBottom = [
	{
		label: "Profile",
		path: "/admin/sender/profile",
		icon:  <SettingsIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Logout",
		path: "#",
		icon:  <SettingsPowerIcon sx={sx}/>,
		nested: [
			{}
		],
	},
]