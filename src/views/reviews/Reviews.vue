<template>
	<div class="reviews">
		<!-- Multiple Sections -->
		<section class="reviews__flex" v-for="(category, index) in categories" :key="index">
			<b-flex-reviews :category="category" :books="books"></b-flex-reviews>
		</section>
	</div>
</template>

<script>
	import BFlexReviews from "../../components/generals/BFlexReviews.vue";
	export default {
		//! Data will be moved into VueX and connect with API later
		//! Testing Purpose
		data: () => ({
			categories: [
				{
					category_id: 1,
					name: "Non Fiction",
				},
				{
					category_id: 2,
					name: "Fiction",
				},
				{
					category_id: 3,
					name: "Life Skills ",
				},
				{
					category_id: 4,
					name: "Technology",
				},
				{
					category_id: 5,
					name: "Vietnamese Literatures",
				},
			],
			books: [
				{
					isbn: "978-1593279509",
					title: "Eloquent JavaScript, Third Edition",
					imageUrl: require("@/assets/images/book-testing.jpg"),
					subtitle: "A Modern Introduction to Programming",
					author: "Marijn Haverbeke",
					published: "2018-12-04T00:00:00.000Z",
					publisher: "No Starch Press",
					pages: 472,
					description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
					website: "http://eloquentjavascript.net/",
				},
			],
		}),
		components: { BFlexReviews },
	};
</script>
