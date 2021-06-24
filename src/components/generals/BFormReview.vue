<template>
	<form class="form-review" action="POST" @submit.prevent="submitReview()">
		<!-- Choose Book -->
		<div class="form-review__select-book">
			<span>Book</span>
			<select v-model="review.book_id">
				<option disabled value="">Please select book to review</option>
				<option v-for="(book, index) in books" :key="index" :value="book.id">
					{{ book.title }}
				</option>
			</select>
		</div>

		<!-- Form Sections -->
		<div class="form-review__sections">
			<span>Section</span>
			<input type="text" v-model="review.section" placeholder="title" />
			<input type="file" accept="image/*" @change="onUploadImage" />
			<textarea class="form__textarea" type="text" cols="10" rows="10" placeholder="Content"></textarea>
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				books: [],
				review: {
					book_id: "",
					section: "",
					image_url: "",
				},
			};
		},

		mounted() {
			this.fetchBooks().then((books) => {
				this.books = books;
			});
		},

		methods: {
			//! Testing, will be converted to VueX
			onUploadImage($event) {
				// Check if the file is null or undefined
				if (!$event.target.files[0]) return;

				const imageFile = $event.target.files[0];
				let reader = new FileReader();
				reader.onload = (event) => {
					let imageUrl = event.target.result;
					if (event.target.readyState == 2 && imageUrl) {
						this.review.image_url = imageUrl;
						console.log(this.review);
					}
				};
				reader.readAsDataURL(imageFile);
			},

			submitReview() {
				console.log(this.review);
			},

			async fetchBooks() {
				let books = await fetch("http://localhost:3000/books", {
					method: "GET",
					headers: {
						Accept: "application/json",
					},
				})
					.then((response) => {
						if (response.status == "200" || response.status == "202") {
							return response.json();
						}
					})
					.catch((error) => console.log(error));
				return books;
			},
		},
	};
</script>

<style></style>
