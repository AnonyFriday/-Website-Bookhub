<template>
	<div class="border-solid">hello</div>
	<header>
		<div id="nav">
			<router-link :to="{ name: 'about' }">About</router-link>
			<router-link :to="{ name: 'reviews' }">About</router-link>
			<router-link :to="{ name: 'affiliate' }">About</router-link>
			<router-link :to="{ name: 'donate' }">About</router-link>
			<router-link :to="{ name: 'subscribe' }">About</router-link>
		</div>
	</header>
	<main>
		<div class="container"></div>
	</main>
	<footer>
		<div class="container"></div>
	</footer>

	<router-view />
</template>

<style lang="scss">
	@import "./styles/shared/main.scss";
</style>
