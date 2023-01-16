<template>
  <div id="fire_safety">
    <div class="header">
      <div class="container">
        <div class="header__title">Пожарная безопасность</div>
        <ContactsButton/>
      </div>
    </div>
    <div class="container">
      <Cards :items="subservices"/>
      <h1 v-if="$route.name !== 'Пожарная безопасность'">{{ $route.name }}</h1>
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
      { title: "ПРОФЕССИОНАЛЬНАЯ<br>ПЕРЕПОДГОТОВКА", href: "/fire_safety/retraining" },
      { title: "ПОВЫШЕНИЕ<br>КВАЛИФИКАЦИИ",          href: "/fire_safety/advanced" }
    ]
  })
}
</script>

<style lang="sass">@import "./style"</style>