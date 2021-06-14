<template>
	<header id="header">
		<div class="container">
			<h1 class="header__logo">
				<img :src="require('@/assets/images/logo-bookhub.png')" />
				<a href="#">Bookhub</a>
			</h1>
			<form action="#">
				<input type="text" class="header__searchbar searchbar" />
			</form>
			<nav>
				<ul class="header__navbar">
					<li><router-link :to="{ name: 'donate' }">donate</router-link></li>
					<li><router-link :to="{ name: 'about' }">About</router-link></li>
					<li><router-link :to="{ name: 'reviews' }">reviews</router-link></li>
					<li><router-link :to="{ name: 'affiliate' }">affiliate</router-link></li>
					<li><router-link :to="{ name: 'subscribe' }">subscribe</router-link></li>
				</ul>
			</nav>
		</div>
	</header>
	<main id="main">
		<div class="container">
			<router-view />
		</div>
	</main>
	<footer id="footer">
		<div class="container"></div>
	</footer>
</template>

<script>
	export default {
		setup() {},
	};
</script>

<style lang="scss">
	@use "./assets/styles/styles.scss";
</style>
