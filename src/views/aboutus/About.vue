<template>
	<div class="about">
		<!-- Welcome Title -->
		<section class="about__welcome">
			<div class="welcome">
				<h1 class="welcome__title">welcome to bookhub</h1>
				<p class="welcome__sub-title">sharing knowledge. sharing hapiness</p>
			</div>
		</section>

		<!-- Simple Flex Categories  -->
		<section class="about__categories">
			<div class="flex-categories">
				<ul class="row">
					<li class="row__cell row__cell--1-3">Nonfiction Books</li>
					<li class="row__cell row__cell--1-3">Fiction Books</li>
					<li class="row__cell row__cell--1-3">Life Skill Books</li>
					<li class="row__cell row__cell--2-4">Tech Books</li>
					<li class="row__cell row__cell--2-4">Vietnameses Literatures</li>
					<li class="row__cell row__cell--full">Random Book Reviews</li>
				</ul>
			</div>
		</section>

		<!-- Fancy Video -->
		<section class="about__carousel" v-for="(title, index) in carousels" :key="index">
			<b-carousel :title="title"></b-carousel>
		</section>

		<!-- New Reviews -->
	</div>
</template>

<script>
	import BCarousel from "../../components/vendor/BCarousel.vue";
	export default {
		//! Will be emitted and moved to VueX
		data: () => ({
			carousels: ["the book that changes me", "new review"],
		}),
		components: { BCarousel },
	};
</script>

<style lang="scss" scoped></style>
