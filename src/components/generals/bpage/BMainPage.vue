<template>
	<div class="main-page">
		<article v-for="(review, index) in fakeReviews" :key="index" class="main-page__article">
			<h3 class="main-page__title">{{ review.title }}</h3>
			<p class="main-page__content">{{ review.content }}</p>
			<img class="main-page__image" :src="review.imageUrl" />
		</article>
	</div>
</template>

<script>
	export default {
		//! Data will be converted into Vuex on the next phase
		data() {
			return {
				fakeReviews: [
					{
						title: "Title 1",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
						imageUrl: require("@/assets/images/dummy-image.jpg"),
					},
					{
						title: "Title 2",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
						imageUrl: require("@/assets/images/dummy-image.jpg"),
					},
					{
						title: "Title 3",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
						imageUrl: require("@/assets/images/dummy-image.jpg"),
					},
				],
			};
		},
	};
</script>

<style></style>
