<template>
  <div id="training">
    <div class="background"/>
    <div class="header">
      <div class="container">
        <div class="header__title">Профессиональное обучение</div>
        <ContactsButton/>
      </div>
    </div>
    <div class="container">
      <Cards :items="subservices"/>
      <h1 v-if="$route.name !== 'Профессиональное обучение'">{{ $route.name }}</h1>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/cards"
import ContactsButton from "@/components/contacts_button"
export default {
  components: { ContactsButton, Cards },
  data: () => ({
    subservices: [
      { title: "ПОДГОТОВКА И<br>ПЕРЕПОДГОТОВКА<br>РАБОЧИХ И СЛУЖАЩИХ", href: "/training/retraining" },
      { title: "ПОВЫШЕНИЕ<br>КВАЛИФИКАЦИИ<br>РАБОЧИХ И СЛУЖАЩИХ",      href: "/training/advanced" }
    ]
  })
}
</script>

<style lang="sass">@import "./style"</style>
