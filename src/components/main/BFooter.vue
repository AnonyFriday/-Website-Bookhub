<template>
	<footer class="footer">
		<div class="container">
			<!-- Form -->
			<div class="footer__form">
				<h2 class="footer__title">Contact Us</h2>
				<b-form></b-form>
			</div>

			<!-- Socios -->
			<div class="footer__socios">
				<h2 class="footer__title">meet us</h2>
				<b-socios></b-socios>
			</div>
		</div>
	</footer>
</template>

<script>
	import BForm from "../BForm.vue";
	import BSocios from "../BSocios.vue";
	export default {
		components: { BSocios, BForm },
	};
</script>

<style></style>
