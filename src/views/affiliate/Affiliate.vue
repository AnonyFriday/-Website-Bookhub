<template>
	<div class="affiliate">
		<!-- Page Header -->
		<section class="affiliate__header">
			<b-page-header :name="page_header"></b-page-header>
		</section>

		<!-- Page Form -->
		<section class="affiliate__form-review">
			<b-form-review></b-form-review>
		</section>
	</div>
</template>

<script>
	import BPageHeader from "../../components/generals/BPageHeader.vue";
	import BFormReview from "../../components/generals/BFormReview.vue";
	export default {
		data() {
			return {
				page_header: "Add a new Review",
			};
		},
		components: {
			BPageHeader,
			BFormReview,
		},
	};
</script>

<style scoped></style>
