import PersonOne from "../../../../assets/images/african man.jpg";
import PersonTwo from "../../../../assets/images/black women.jpg";
import PersonThree from "../../../../assets/images/african yut.jpg";
// import PersonFour from "../../../../assets/images/caucasian.jpg";

export const testimonials = {
	id: "testimonials",
	section: "testimonials",
	title: "What people say about us",
	subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est velit, semper ut tristique quis, placerat eu sapien.Morbi est velit, semper ut tristique quis, placerat eu sapien.",
	body: [
		{
			image: {
				src: PersonOne,
				alt: "person one"
			},
			author: {
				name: "Person One",
				profession: "Profession One"
			},
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est velit, semper ut tristique quis, placerat eu sapien. Morbi est velit, semper ut tristique quis, placerat eu sapien."
		},
		{
			image: {
				src: PersonTwo,
				alt: "person two"
			},
			author: {
				name: "Person One",
				profession: "Profession One"
			},
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est velit, semper ut tristique quis, placerat eu sapien. Morbi est velit, semper ut tristique quis, placerat eu sapien."
		},
		{
			image: {
				src: PersonThree,
				alt: "person three"
			},
			author: {
				name: "Person One",
				profession: "Profession One"
			},
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est velit, semper ut tristique quis, placerat eu sapien. Morbi est velit, semper ut tristique quis, placerat eu sapien."
		},
		// {
		// 	image: {
		// 		src: PersonFour,
		// 		alt: "person four"
		// 	},
		// 	author: {
		// 		name: "Person One",
		// 		profession: "Profession One"
		// 	},
		// 	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est velit, semper ut tristique quis, placerat eu sapien."
		// },
	]
}