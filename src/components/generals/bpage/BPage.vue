<template>
	<article class="page">
		<!-- Top Page -->
		<section class="page__header">
			<b-header-page></b-header-page>
		</section>
		<!-- Main Page -->
		<section class="page__main">
			<b-main-page></b-main-page>
		</section>
	</article>
</template>

<script>
	import BHeaderPage from "./BTopPage.vue";
	import BMainPage from "./BMainPage.vue";
	export default {
		components: { BHeaderPage, BMainPage },
	};
</script>

<style></style>
