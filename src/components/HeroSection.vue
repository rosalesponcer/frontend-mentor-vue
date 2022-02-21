<template lang="pug">
section.hero

	img.hero__img(:src="heroImg")
	h1.hero__title.ff-1 WE ARE CREATIVES
	img.hero__arrow(src="@/assets/images/icon-arrow-down.svg")
</template>

<script>
export default {
	data() {
		return {
			widthSize: window.innerWidth,
		};
	},
	computed: {
		heroImg() {
			return this.widthSize < 1440
				? "src/assets/images/mobile/image-header.jpg"
				: "src/assets/images/desktop/image-header.jpg";
		},
	},
};
</script>

<style lang="scss">
@import "HeroSection";
</style>
