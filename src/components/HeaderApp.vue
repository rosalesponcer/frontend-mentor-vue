<template lang="pug">
header.header
	img.header__logo(src="@/assets/images/logo.svg")


	button.header__hamburger(@click="openNav")
		img(src="@/assets/images/icon-hamburger.svg")

	nav.nav(:class="isVisible")
		ul.nav__container
			li.nav__item
				button.nav__button About
			li.nav__item
				button.nav__button Service
			li.nav__item
				button.nav__button Projects
			li.nav__item
				button.nav__button.nav__button--contact.ff-1 CONTACT
</template>

<script>
export default {
	data() {
		return {
			navVisible: false,
		};
	},
	methods: {
		openNav() {
			this.navVisible = !this.navVisible;
		},
	},
	computed: {
		isVisible() {
			return this.navVisible ? "nav--open" : "";
		},
	},
};
</script>

<style lang="scss" scoped>
@import "HeaderApp";
</style>
