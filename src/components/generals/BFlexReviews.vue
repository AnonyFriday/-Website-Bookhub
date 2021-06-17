<template>
	<div class="flex-reviews">
		<h2 class="flex-reviews__title">{{ category.name }}</h2>
		<ul class="row">
			<li v-for="(book, index) in 6" :key="index" class="row__cell row__cell--1/2">
				<router-link :to="{ name: 'review', params: { id: 123 } }">
					<img :src="require('@/assets/images/book-testing.jpg')" />
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			category: Object,
			books: Array,
		},
	};
</script>

<style></style>
