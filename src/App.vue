<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
	<RouterView />
</template>

<style lang="scss">
@import "style";

#app {
	min-height: 100vh;

	@media screen and (max-device-width: 375px) {
	}
}
</style>
