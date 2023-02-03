<template>
  <div :class="{'viv': viv}">
    <Navbar @toggle-version="(val) => viv = val"/>
    <PhotoModal/>
    <Callback/>
    <Chat/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar"
import Callback from "@/components/callback"
import Footer from "@/components/footer"
import PhotoModal from "@/components/photo_modal"
import Chat from "@/components/chat"
export default {
  components: { Navbar, Callback, Footer, PhotoModal, Chat },
  data: () => ({ viv: false })
}
</script>

<style lang="sass">
@import "assets/styles/fonts"
@import "assets/styles/elements"
@import "assets/styles/element.mobile"
@import "assets/styles/colours"
@import "assets/styles/viv"

html, body, #app
  overflow-y: auto

#app
  margin-top: 55px
  //display: grid!important
  //grid-template-rows: auto auto
  font-family: ArialNarrow, sans-serif
  font-size: 1vw
</style>
