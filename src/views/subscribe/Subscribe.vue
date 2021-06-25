<template>
	<div class="subscribe">
		<!-- Header  -->
		<section class="subscribe__header">
			<b-page-header :name="page_header">
				<template v-slot:subtitle>
					<div class="page-header__subtitle">
						<h3>You can start your subscription with Bookhub to update our new review</h3>
					</div>
					<div class="page-header__features">
						<ul>
							<div v-for="(feature, index) in features" :key="index" class="feature">
								<li class="feature__content">{{ feature }}</li>
							</div>
						</ul>
					</div>
				</template>
			</b-page-header>
		</section>

		<!-- Subscribe Button -->
		<section class="subscribe__button">
			<button class="btn--left-padding-icon">Subscribe with Gmail</button>
		</section>
	</div>
</template>

<script>
	import BPageHeader from "../../components/generals/BPageHeader.vue";
	export default {
		data() {
			return {
				page_header: "Subscribe to get more reviews",
				features: ["Automated Book's review right on your Gmail", "Early access to our new features", "Connect with our book hub community"],
			};
		},
		components: {
			BPageHeader,
		},
	};
</script>

<style></style>
