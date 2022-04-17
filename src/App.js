import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme/theme"
import LandingUI from "./layout/ui/landing/landingui";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";
import Home from "./pages/landing/home/home";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
		return (
			<Router>
				<ThemeProvider theme={theme}>
					<Routes>
						<Route path="/landing" element={<LandingUI/>}>
							<Route path="/landing/home" element={<Home/>}/>
							<Route path="/landing/about" element={<About/>}/>
							<Route path="/landing/contact" element={<Contact/>}/>
						</Route>
					</Routes>
				</ThemeProvider>
			</Router>
		)
}

export default App
