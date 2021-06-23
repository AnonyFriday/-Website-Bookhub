<template>
	<form class="form" action="#" method="GET">
		<input class="form__input" type="text" :name="form_type.first_input_name" :placeholder="form_type.first_input_name" />
		<input class="form__input" type="text" name="form_type.first_input_name" placeholder="phone" />

		<!--Input File Image -->
		<div v-if="isDisplayFileInput" style="box-shadow: none; margin-bottom:8px">
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

		props: {
			form: {
				type: String,
				require: true,
			},
		},

		data() {
			return {
				//!  Error
				form_type: {
					first_input_name: this.$props.form === "footer" ? "name" : "section name",
					second_input_name: "phone",
					textaread_name: "content",
					is_display_fileInput: false,
				},
			};
		},
	};
</script>

<style></style>
