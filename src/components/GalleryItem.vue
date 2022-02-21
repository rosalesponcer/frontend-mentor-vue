<template lang="pug">
.item.gallery__item(v-if="item")

	img.item__img(:src="imgSrc")

	.item__container(:class="{'item__container--float' : item.float}")
		h2.item__title.ff-1.fw-2 {{ item.title }}

		p.item__text {{ item.text }}

		button.item__button(v-if="item.button")
			span.ff-1 LEARN MORE

</template>

<script>
export default {
	props: {
		item: {
			type: Object,
		},
	},
	data() {
		return {
			widthSize: window.innerWidth,
		};
	},
	computed: {
		imgSrc() {
			const isMobile = this.widthSize < 1440;

			return this.item.url(isMobile);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "GalleryItem";
</style>
