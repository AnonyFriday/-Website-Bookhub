import Reviews from "../../../../views/reviews/Reviews.vue";
import Review from "../../../../views/reviews/Review.vue";

const reviews = [
	{
		path: "/reviews",
		name: "reviews",
		component: Reviews,
	},

	//! Temporally assume :id matches Number
	{
		path: "/reviews/:id(\\d+)+",
		name: "review",
		component: Review,
	},
];

export default [...reviews];
