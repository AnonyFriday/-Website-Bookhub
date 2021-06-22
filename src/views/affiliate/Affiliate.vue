<template>
	<div class="affiliate">
		<section class="affiliate__header">
			<h1 class="page-header">add a review</h1>
		</section>
		<section class="affliate__submit">
			<form class="form-review">
				<!-- Title -->
				<div class="form-review__input">
					<p>Book Title</p>
					<input type="text" name="book_title" value="" />
				</div>

				<!-- Author -->
				<div class="form-review__input">
					<p>Book Author</p>
					<input type="text" name="book_author" value="" />
				</div>

				<div class="form-review__sections">
					<p>Section</p>

					<b-form :type="section"></b-form>
					<!-- <div>
						<input type="text" name="section_name" />
						<input type="file" @change="onFileImageSelected" />
						<input type="textarea" />
					</div> -->
				</div>
			</form>
		</section>
	</div>
</template>

<script>
	import BForm from "../../components/footer/BForm.vue";
	//! The file below will be moved to the vuex store
	export default {
		components: { BForm },
		methods: {
			onFileSelected(event) {
				console.log(event);
			},
		},
	};
</script>

<style scoped></style>
