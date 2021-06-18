import { createRouter, createWebHistory } from "vue-router";

// Import routes globally
import routes from "./routes/index";

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: "active",
	linkExactActiveClass: "active",
});

export default router;
