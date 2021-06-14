<template>
	<header id="header">
		<div class="container">
			<!-- Logo -->
			<h1 class="header__logo">
				<img :src="logoUrl" />
				<a href="#">Bookhub</a>
			</h1>

			<!-- Search Bar -->
			<form action="#">
				<input type="text" class="header__searchbar searchbar" />
			</form>

			<!-- Navigation -->
			<nav>
				<ul class="header__navbar">
					<li v-for="(page, index) in pages" :key="index">
						<router-link :to="{ name: `${page}` }">{{ page }}</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<script>
	export default {
		data() {
			return {
				logoUrl: require("@/assets/images/logo-bookhub.png"),
				pages: ["donate", "about", "reviews", "affiliate", "subscribe"],
			};
		},
	};
</script>

<style></style>
