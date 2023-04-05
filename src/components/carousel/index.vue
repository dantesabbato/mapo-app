<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="doc in docs" :key="doc">
      <a :href="`${path}${doc}.${type}`" target="_blank">
        <img :src="`${path}previews/${doc}.png`"
             height="300"
             class="shadow"
        >
      </a>
      <div class="carousel__caption">{{ doc }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel"
export default {
  components: { Carousel, Slide, Navigation },
  props: { docs: Array, path: String, type: String },
  data: () => ({
    settings: { itemsToShow: 1, snapAlign: "center" },
    breakpoints: { 700: { itemsToShow: 2.5,  snapAlign: "center" }, 1024: { itemsToShow: 5, snapAlign: "start" } }
  })
}
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
