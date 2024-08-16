<template>
  <div v-if="showBanner" id="cookie_banner">
    <div class="container">
      <div class="d-flex align-items-center">
        <button @click="acceptCookies" class="btn btn-warning me-5">СОГЛАСЕН</button>
        <p class="mb-0">
          Нажимая кнопку "СОГЛАСЕН", Вы подтверждаете то, что Вы проинформированы об использовании на нашем сайте
          <router-link :to="{ path: '/about/personal_data', hash: '#cookies_title' }">cookies</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showBanner: false
  }),
  mounted() {
    this.checkCookieConsent();
  },
  methods: {
    checkCookieConsent() {
      const consent = localStorage.getItem("cookieConsent")
      if (!consent) { this.showBanner = true }
    },
    acceptCookies() {
      localStorage.setItem("cookieConsent", "true")
      this.showBanner = false
    },
  }
}
</script>

<style lang="sass">@import "style"</style>