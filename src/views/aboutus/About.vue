<template>
	<div class="about">
		<!-- Welcome Title -->
		<section class="about__welcome">
			<b-welcome></b-welcome>
		</section>

		<!-- Simple Flex Categories  -->
		<section class="about__categories">
			<b-flex-categories></b-flex-categories>
		</section>

		<!-- Fancy Video -->
		<section class="about__carousel" v-for="(title, index) in carousels" :key="index">
			<b-carousel :title="title"></b-carousel>
		</section>

		<!-- New Reviews -->
	</div>
</template>

<script>
	import BFlexCategories from "../../components/generals/BFlexCategories.vue";
	import BWelcome from "../../components/generals/BWelcome.vue";
	import BCarousel from "../../components/vendor/BCarousel.vue";
	export default {
		//! Will be emitted and moved to VueX
		data: () => ({
			carousels: ["the book that changes me", "new review"],
		}),
		components: { BCarousel, BWelcome, BFlexCategories },
	};
</script>

<style lang="scss" scoped></style>
