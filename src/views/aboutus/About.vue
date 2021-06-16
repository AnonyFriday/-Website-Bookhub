<template>
	<div class="about">
		<!-- Welcome Title -->
		<section class="about__welcome">
			<div class="welcome">
				<h1 class="welcome__title">welcome to bookhub</h1>
				<p class="welcome__sub-title">sharing knowledge. sharing hapiness</p>
			</div>
		</section>

		<!-- Simple Flex Categories  -->
		<section class="about__categories">
			<div class="flex-categories">
				<ul class="row">
					<li class="row__cell row__cell--1-3">Nonfiction Books</li>
					<li class="row__cell row__cell--1-3">Fiction Books</li>
					<li class="row__cell row__cell--1-3">Life Skill Books</li>
					<li class="row__cell row__cell--2-4">Tech Books</li>
					<li class="row__cell row__cell--2-4">Vietnameses Literatures</li>
					<li class="row__cell row__cell--full">Random Book Reviews</li>
				</ul>
			</div>
		</section>

		<!-- Fancy Video -->
		<section class="about__carousel">
			<div class="carousel">
				<h2 class="carousel__title">dummy text</h2>
				<!-- Flicky Carousel  -->
				<div
					class="main-carousel"
					data-flickity='
        { "cellAlign": "left", "contain": true, "wrapAround": true  }'
				>
					<div class="carousel-cell">
						<a href="#">
							<img :src="require('@/assets/images/dummy-image.jpg')" />
						</a>
					</div>
					<div class="carousel-cell">
						<a href="#">
							<img :src="require('@/assets/images/dummy-image.jpg')" />
						</a>
					</div>
					<div class="carousel-cell">
						<a href="#">
							<img :src="require('@/assets/images/dummy-image.jpg')" />
						</a>
					</div>
					<div class="carousel-cell">
						<a href="#">
							<img :src="require('@/assets/images/dummy-image.jpg')" />
						</a>
					</div>
					<div class="carousel-cell">
						<a href="#">
							<img :src="require('@/assets/images/dummy-image.jpg')" />
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- New Reviews -->
		<section class="about__carousel"></section>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped></style>
