<template>
	<!-- Header -->
	<b-header></b-header>

	<!-- Main -->
	<b-main></b-main>

	<!-- Footer -->
	<b-footer></b-footer>
</template>

<script>
	import BFooter from "./components/footer/BFooter";
	import BHeader from "./components/header/BHeader";
	import BMain from "./components/main/BMain";

	export default {
		components: { BHeader, BMain, BFooter },
		setup() {},
	};
</script>

<style lang="scss">
	// Global Endpoint SCSS
	@use "./assets/styles/styles.scss";
</style>
