<template>
  <div id="education">
    <div class="header">
      <div class="container">
        <div class="header__title">Профессиональное дополнительное образование</div>
        <ContactsButton/>
      </div>
    </div>
    <div class="container">
      <Cards :items="subservices"/>
      <h1 v-if="$route.name !== 'Дополнительное профессиональное образование'">{{ $route.name }}</h1>
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
      { title: "Профессиональная<br>переподготовка", href: "/additional/retraining" },
      { title: "Повышение<br>классификации",         href: "/additional/advanced" }
    ]
  })
}
</script>

<style lang="sass">@import "./style"</style>