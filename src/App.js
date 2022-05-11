import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme/theme"
import LandingUI from "./layout/ui/landing/landingui";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";
import Home from "./pages/landing/home/home";
import { ThemeProvider } from "@mui/material/styles";

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
							<Route path="/admin/sender/tracking" element={<Tracking/>}/>
							<Route path="/admin/sender/analitics" element={<Analitics/>}/>
							<Route path="/admin/sender/order" element={<Order/>}/>
							<Route path="/admin/sender/profile" element={<Profile/>}/>
						</Route>
					</Routes>
				</ThemeProvider>
			</Router>
		)
}

export default App
