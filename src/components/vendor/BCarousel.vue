<template>
	<div class="carousel">
		<!--  Carousel Title-->
		<h2 class="carousel__title">{{ title }}</h2>

		<!-- Carousel Slides -->
		<vueper-slides lazy lazy-load-on-drag autoplay height="100" pause-on-hover="true">
			<vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.imageUrl" :content="slide.content"></vueper-slide>
		</vueper-slides>
	</div>
</template>

<script>
	// 3rd Party Carousel Library
	// Ref: https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com
	import { VueperSlides, VueperSlide } from "vueperslides";
	import "vueperslides/dist/vueperslides.css";

	export default {
		props: ["title"],
		data() {
			return {
				//! Will be emitted and moved to VueX

				slides: [
					{
						title: "Slide #1",
						imageUrl: require("@/assets/images/dummy-image.jpg"),
						link: "#",
					},
					{
						title: "Slide #1",
						imageUrl: require("@/assets/images/dummy-image.jpg"),
					},
					{
						title: "Slide #1",
						imageUrl: require("@/assets/images/dummy-image.jpg"),
					},
					{
						title: "Slide #1",
						imageUrl: require("@/assets/images/dummy-image.jpg"),
					},
				],
			};
		},
		components: { VueperSlides, VueperSlide },
	};
</script>

<style></style>
