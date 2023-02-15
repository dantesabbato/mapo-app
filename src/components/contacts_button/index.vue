<template>
  <div id="contacts_button">
    <button>
      <a href="tel:74956986100">
        <img :src="require('@/assets/icons/phone.svg')">
        +7 (495) 698-61-00
      </a>
    </button>
    <div class="link-login" @click="scrollToFooter">
      <span><img :src="require('@/assets/icons/geo.svg')"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToFooter() { window.scrollTo(0, document.body.scrollHeight) }
  }
}
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
