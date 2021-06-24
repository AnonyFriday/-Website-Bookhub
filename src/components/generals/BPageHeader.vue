<template>
	<div class="page-header">
		<h2>{{ name }}</h2>
	</div>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				required: true,
			},
		},
	};
</script>

<style></style>
