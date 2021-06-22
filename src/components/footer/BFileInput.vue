<template>
	<div class="file-input">
		<input id="file" class="file-input__input" type="file" name="image_url" @change="onImageSelected" />
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			//! Currently get the image data
			onImageSelected(event) {
				let imageData = event.target.files[0];
				console.log(imageData);
			},
		},
	};
</script>

<style></style>
