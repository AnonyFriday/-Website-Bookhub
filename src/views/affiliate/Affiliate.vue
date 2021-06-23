<template>
	<div class="affiliate">
		<!-- Page Header -->
		<section class="affiliate__header">
			<h2 class="page-header">add a review</h2>
		</section>

		<!-- Page Form -->
		<section class="affliate__form">
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

				<!-- Form Sections -->
				<div class="form-review__sections">
					<p>Section</p>
					<b-form :isDisplayFileInput="true"></b-form>
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
	};
</script>

<style scoped></style>
