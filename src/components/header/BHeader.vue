<template>
	<header class="header">
		<div class="container">
			<!-- Logo -->
			<h1 class="header__logo">
				<b-logo></b-logo>
			</h1>

			<!-- Search Bar -->
			<div class="header__searchbar">
				<b-search-bar></b-search-bar>
			</div>

			<!-- Navigation -->
			<nav class="header__navbar">
				<b-nav-bar></b-nav-bar>
			</nav>
		</div>
	</header>
</template>

<script>
	import BLogo from "./BLogo.vue";
	import BNavBar from "./BNavBar.vue";
	import BSearchBar from "./BSearchBar.vue";
	export default {
		components: { BLogo, BSearchBar, BNavBar },
	};
</script>
BNavBarript>

<style></style>
