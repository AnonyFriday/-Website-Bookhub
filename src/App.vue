<template>
	<!-- Header -->
	<b-header></b-header>

	<!-- Main -->
	<b-main></b-main>

	<!-- Footer -->
	<b-footer></b-footer>
</template>

<script>
	import BFooter from "./components/footer/BFooter.vue";
	import BHeader from "./components/header/BHeader.vue";
	import BMain from "./components/main/BMain.vue";

	export default {
		components: { BHeader, BMain, BFooter },
		setup() {},
	};
</script>

<style lang="scss">
	// Global Endpoint SCSS
	@use "./assets/styles/styles.scss";
</style>
