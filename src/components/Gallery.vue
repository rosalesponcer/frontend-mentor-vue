<template lang="pug">
.gallery
	GalleryItem(v-for="(item,index) in list" :key="index")
	//- .item.gallery__item
	//- 	img.item__img(src="@/assets/images/desktop/image-transform.jpg")

	//- 	.item__container
	//- 		h2.item__title.ff-1.fw-2 Transform your brand
	//- 		p.item__text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas officia enim ullam incidunt vero ducimus error maxime corrupti ea illum.

	//- 		button.item__button
	//- 			span.ff-1 LEARN MORE
</template>

<script>
import GalleryItem from "./GalleryItem.vue";
export default {
	components: { GalleryItem },
	data() {
		return {
			list: [1, 2, 3, 4, 5],
		};
	},
};
</script>

<style lang="scss" scoped>
@import "Gallery";
</style>
