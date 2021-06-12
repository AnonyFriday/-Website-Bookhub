// Import routes globally
import aboutus from "./aboutus/index";
import affiliate from "./affiliate/index";
import donate from "./donate/index";
import reviews from "./reviews/index";
import subscribe from "./subscribe/index";
import NotFound from "../../../views/errors/NotFound.vue";

// Match any probable routes
const generalErrorRoutes = [{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }];

export default [...generalErrorRoutes, ...aboutus, ...affiliate, ...donate, ...reviews, ...subscribe];
