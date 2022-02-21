<template lang="pug">
.gallery
	GalleryItem(v-for="(item,index) in list" :key="index" :item="item")

</template>

<script>
import GalleryItem from "./GalleryItem.vue";

import { GALLEY_ITEMS } from "./constants/appConstants.js";

export default {
	components: { GalleryItem },
	data() {
		return {
			list: GALLEY_ITEMS,
		};
	},
};
</script>

<style lang="scss" scoped>
@import "Gallery";
</style>
