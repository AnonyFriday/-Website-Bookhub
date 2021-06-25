<template>
	<form class="form" action="#" method="POST" @submit.prevent="sendFeedback()">
		<input class="form__input" type="text" v-model="name" placeholder="name" name="name" />
		<input class="form__input" type="number" v-model="phone" placeholder="phone" name="phone" />
		<textarea class="form__textarea" type="text" v-model="content" cols="10" rows="10" placeholder="Content" name="content" minlength="10"></textarea>

		<!-- Button -->
		<button type="submit" class="form__submit btn-primary">Submit</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
				phone: "",
				content: "",
			};
		},
		methods: {
			sendFeedback() {
				console.log(this.name, this.phone, this.content);
			},
		},
	};
</script>

<style></style>
