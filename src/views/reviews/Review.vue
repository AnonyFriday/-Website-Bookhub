<template>
	<div class="review">
		<!-- The 1 Page Review -->
		<section class="review__quote">
			<b-block-quote></b-block-quote>
		</section>
		<section class="review__page">
			<b-page></b-page>
		</section>
	</div>
</template>

<script>
	import BBlockQuote from "../../components/generals/BBlockQuote.vue";
	import BPage from "../../components/generals/bpage/BPage.vue";
	export default {
		data() {
			return {};
		},
		components: { BBlockQuote, BPage },
	};
</script>
