<template lang="pug">
section.hero

	img.hero__img(:src="heroImg")
	h1.hero__title.ff-1 WE ARE CREATIVES
	img.hero__arrow(src="@/assets/images/icon-arrow-down.svg")
</template>

<script>
import mobileHeader from "../assets/images/mobile/image-header.jpg";
import desktopHeader from "../assets/images/desktop/image-header.jpg";
export default {
	data() {
		return {
			widthSize: window.innerWidth,
		};
	},
	computed: {
		heroImg() {
			return this.widthSize < 1440 ? mobileHeader : desktopHeader;
		},
	},
};
</script>

<style lang="scss">
@import "HeroSection";
</style>
