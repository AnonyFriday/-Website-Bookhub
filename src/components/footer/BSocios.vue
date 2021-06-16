<template>
	<ul class="socios">
		<li v-for="(socio, index) in socios" :key="index" class="socios__item">
			<a href="#">
				<img :src="socio.imageUrl" />
			</a>
			<p>{{ socio.name }}</p>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				socios: [
					{ name: "facebook", className: "socio", imageUrl: require("@/assets/images/icon-facebook.png"), link: "" },
					{ name: "youtube", className: "socio", imageUrl: require("@/assets/images/icon-youtube.png"), link: "" },
					{ name: "instagram", className: "socio", imageUrl: require("@/assets/images/icon-instagram.png"), link: "" },
				],
			};
		},
	};
</script>

<style></style>
