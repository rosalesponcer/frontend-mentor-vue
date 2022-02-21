<script setup>
import TheWelcome from "@/components/TheWelcome.vue";

import HeaderApp from "../components/HeaderApp.vue";
import HeroSection from "../components/HeroSection.vue";
import Gallery from "../components/Gallery.vue";
</script>

<template lang="pug">

HeaderApp

.home-view
	HeroSection
	Gallery

</template>

<style scoped>
.home-view {
	height: 100%;
	width: 100%;
}
</style>
