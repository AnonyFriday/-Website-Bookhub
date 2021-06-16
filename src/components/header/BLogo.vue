<template>
	<div class="logo">
		<img class="logo__icon" :src="logoUrl" />
		<a class="logo__name" href="#">Bookhub</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logoUrl: require("@/assets/images/logo-bookhub.png"),
			};
		},
	};
</script>

<style></style>
