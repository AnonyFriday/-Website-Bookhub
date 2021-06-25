<template>
	<div class="donation">
		<section class="donation__header">
			<b-page-header :name="page_header"></b-page-header>
		</section>
		<!-- DonorBox Testing -->
		<section class="donation__donor-button">
			<b-donor-button></b-donor-button>
		</section>
	</div>
</template>

<script>
	import BDonorButton from "../../components/generals/BDonorButton.vue";
	import BPageHeader from "../../components/generals/BPageHeader.vue";
	export default {
		data() {
			return {
				page_header: "Support us through Donation",
			};
		},
		components: { BDonorButton, BPageHeader },
	};
</script>

<style></style>
