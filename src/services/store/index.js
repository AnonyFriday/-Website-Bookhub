import { createStore } from "vuex";

// Import store components
import actions from "./actions/index";
import getters from "./getters/index";
import state from "./state/index";
import mutations from "./mutations/index";

// Create a new store instance.
const store = createStore({
	actions,
	state,
	mutations,
	getters,
});
export default store;
