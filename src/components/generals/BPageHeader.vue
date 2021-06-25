<template>
	<div class="page-header">
		<h2>{{ name }}</h2>
		<slot name="subtitle"></slot>
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
