import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme/theme"
import LandingUI from "./layout/ui/landing/landingui";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";
import Home from "./pages/landing/home/home";
import { ThemeProvider } from "@mui/material/styles";
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
						<Route path="/sender" element={<SenderUI/>}>
							<Route path="/sender/home" element={<SenderHome/>}/>
							<Route path="/sender/tracking" element={<Tracking/>}/>
							<Route path="/sender/analitics" element={<Analitics/>}/>
							<Route path="/sender/order" element={<Order/>}/>
							<Route path="/sender/profile" element={<Profile/>}/>
						</Route>
					</Routes>
				</ThemeProvider>
			</Router>
		)
}

export default App
