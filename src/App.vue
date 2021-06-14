<template>
	<b-header></b-header>
	<b-main></b-main>
	<b-footer></b-footer>
</template>

<script>
	import BFooter from "./components/main/BFooter.vue";
	import BHeader from "./components/main/BHeader.vue";
	import BMain from "./components/main/BMain.vue";
	export default {
		components: { BHeader, BFooter, BMain },
		setup() {},
	};
</script>

<style lang="scss">
	// Global Endpoint SCSS
	@use "./assets/styles/styles.scss";
</style>
