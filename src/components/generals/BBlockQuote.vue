<template>
	<div class="blockquote">
		<img class="blockquote__img" :src="imageSmileFaceUrl" />
		<span class="blockquote__date">{{ datePublished }}</span>
	</div>
</template>

<script>
	export default {
		//! Data will be converted into VueX at the later phase
		data: () => ({
			imageSmileFaceUrl: require("@/assets/images/icon-reading-book.png"),
			datePublished: "Published On 03, May 2021",
		}),
	};
</script>

<style></style>
