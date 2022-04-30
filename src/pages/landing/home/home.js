import React from 'react'
import Subscribe from "../../../components/subscribe"
import Banner from "./banner/banner"
import HomeAbout from "./homeabout/homeabout"
import HomeFeatures from "./homefeatures/homefeatures"
import Testimonials from "./testimonials/testimonials"

const Home = () => {
	return (
		<>
			<Banner/>
			<HomeAbout/>
			<HomeFeatures/>
			<Testimonials/>
			<Subscribe/>
		</>
	)
}

export default Home