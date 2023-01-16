<template>
  <div class="modal" id="photoModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" :style="rotateImage">
      <div class="modal-content"><img :src="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    image() { return this.$store.state.photo_path },
    rotateImage() {
      let img = new Image()
      img.src = this.$store.state.photo_path
      return img.height / img.width > 2 ? "transform: rotate(90deg) translate(-50%, 0);" : ""
    }
  }
}
</script>

<style lang="sass">@import "style"</style>