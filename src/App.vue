<template>
	<header>
		<nav class="nav">
			<ul>
				<li><router-link :to="{ name: 'about' }">About</router-link></li>
				<li><router-link :to="{ name: 'reviews' }">reviews</router-link></li>
				<li><router-link :to="{ name: 'affiliate' }">affiliate</router-link></li>
				<li><router-link :to="{ name: 'donate' }">donate</router-link></li>
				<li><router-link :to="{ name: 'subscribe' }">subscribe</router-link></li>
			</ul>
		</nav>
	</header>
	<main>
		<div class="container">
			<router-view />
		</div>
	</main>
	<footer>
		<div class="container"></div>
	</footer>
</template>

<style lang="scss">
	@import "./assets/styles/shared/main.scss";
</style>
