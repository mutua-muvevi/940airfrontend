import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./theme/theme"
import { ThemeProvider } from "@mui/material/styles";

import LandingUI from "./layout/ui/landing/landingui";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";
import Home from "./pages/landing/home/home";

import AuthLayout from "./layout/ui/auth/authui";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgotpassword/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword/resetpassword";


import SenderUI from './layout/ui/sender/senderui';
import SenderHome from './pages/dashboard/sender/home/senderhome';
import Tracking from './pages/dashboard/sender/tracking/tracking';
import Order from './pages/dashboard/sender/order/order';
import Analitics from './pages/dashboard/sender/analitics/analitics';
import Profile from './pages/dashboard/sender/profile/profile';


import VendorUI from "./layout/ui/vendor/vendorui";
import VendorHome from "./pages/dashboard/vendor/home/vendorhome";
import VendorTracking from "./pages/dashboard/vendor/tracking/tracking";
import VendorAnalitics from "./pages/dashboard/vendor/analitics/vendoranalitics";
import VendorProfile from "./pages/dashboard/vendor/profile/vendorprofile";
import MyBusiness from "./pages/dashboard/vendor/mybusiness/mybusiness";
import VendorOrder from "./pages/dashboard/vendor/order/vendororder";


const App = () => {
		return (
			<Router>
				<ThemeProvider theme={theme}>
					<Routes>
						<Route path="/" element={<LandingUI/>}>
							<Route path="/home" element={<Home/>}/>
							<Route path="/about" element={<About/>}/>
							<Route path="/contact" element={<Contact/>}/>
						</Route>

						<Route path="/auth" element={<AuthLayout/>}>
							<Route path="/auth/register" element={<Register/>}/>
							<Route path="/auth/login" element={<Login/>}/>
							<Route path="/auth/forgotpassword" element={<ForgotPassword/>}/>
							<Route path="/auth/resetpassword" element={<ResetPassword/>}/>
						</Route>

						<Route path="/admin/sender" element={<SenderUI/>}>
							<Route path="/admin/sender/home" element={<SenderHome/>}/>
							<Route path="/admin/sender/analitics" element={<Analitics/>}/>
							<Route path="/admin/sender/tracking" element={<Tracking/>}/>
							<Route path="/admin/sender/order" element={<Order/>}/>
							<Route path="/admin/sender/profile" element={<Profile/>}/>
						</Route>

						<Route path="/admin/vendor" element={<VendorUI/>}>
							<Route path="/admin/vendor/home" element={<VendorHome/>}/>
							<Route path="/admin/vendor/analitics" element={<VendorAnalitics/>}/>
							<Route path="/admin/vendor/tracking" element={<VendorTracking/>}/>
							<Route path="/admin/vendor/order" element={<VendorOrder/>}/>
							<Route path="/admin/vendor/mybusiness" element={<MyBusiness/>}/>
							<Route path="/admin/vendor/profile" element={<VendorProfile/>}/>
						</Route>

					</Routes>
				</ThemeProvider>
			</Router>
		)
}

export default App
