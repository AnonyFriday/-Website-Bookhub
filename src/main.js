import { createApp } from "vue";
import App from "./App.vue";

// Vue Router
import router from "./services/router";

// VueX
import store from "./services/store";

// Use Vue Library and create the instance of the App
createApp(App)
	.use(router)
	.use(store)
	.mount("#app");
