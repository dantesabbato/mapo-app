<template>
  <div class="tags">
    <div class="tag" v-for="page in pages" :key="page">
      <router-link :to="page.href">
        <div class="tag__body">
          <div class="tag__image"></div>
          <div class="tag__text">{{ page.title }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: { pages: Array }
}
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
