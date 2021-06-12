import About from "../../../../views/aboutus/About.vue";
const about = [
	// Alias for route "/" as "/about"
	{
		path: "/",
		component: About,
		alias: ["/about"],
	},
	{
		path: "/about",
		name: "about",
		component: About,
	},
];

export default [...about];
