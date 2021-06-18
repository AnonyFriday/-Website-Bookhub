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
				isActive: true,
				specialPage: ["donate"],
				pages: ["donate", "about", "reviews", "affiliate", "subscribe"],
			};
		},

		methods: {},
	};
</script>

<style></style>
