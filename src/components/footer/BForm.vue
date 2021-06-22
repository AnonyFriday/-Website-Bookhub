<template>
	<form class="form" action="#" method="GET">
		<input class="form__input" type="text" name="name" placeholder="Name" />
		<input class="form__input" type="text" name="phone" placeholder="phone" />

		<!--Input File Image -->
		<div :v-show="isDisplayFileInput" style="box-shadow: none; margin-bottom:8px">
			<b-file-input></b-file-input>
		</div>

		<textarea class="form__textarea" type="text" name="content" cols="10" rows="10" placeholder="Content"></textarea>

		<!-- Button -->
		<button type="submit" class="form__submit btn-primary">Submit</button>
	</form>
</template>

<script>
	import BFileInput from "./BFileInput.vue";
	export default {
		components: { BFileInput },
		computed: {
			isDisplayFileInput: function() {
				return this.$props.type === "section" ? true : false;
			},
		},
		props: {
			type: String,
		},
		data() {
			return {};
		},
	};
</script>

<style></style>
