<template>
	<ul class="navbar">
		<li v-for="(page, index) in pages" :key="index">
			<router-link :to="{ name: `${page}` }">{{ page }}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		computed: {},
		data() {
			return {
				specialPage: ["donate"],
				pages: ["donate", "about", "reviews", "affiliate", "subscribe"],
			};
		},

		//! Error on rendering "donate" background color
		// methods: {
		// 	isSpecialPage(page) {
		// 		return this.specialPage.indexOf(page) == -1 ? "" : "navbar__item--important";
		// 	},
		// },
	};
</script>

<style></style>
