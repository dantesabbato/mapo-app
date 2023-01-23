<template>
  <div id="labour_protection">
    <div class="background"/>
    <div class="header">
      <div class="container">
        <div class="header__title">Охрана труда</div>
        <ContactsButton/>
      </div>
    </div>
    <div class="container">
      <Cards :items="subservices"/>
      <h1 v-if="$route.name !== 'Охрана труда'">{{ $route.name }}</h1>
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
      { title: "Обучение по оказанию<br>первой помощи пострадавшим", href: "/labour_protection/first_aid_training" },
      { title: "Обучение требованиям<br>охраны труда",               href: "/labour_protection/requirements_training" },
      { title: "Обучение по использованию<br>средств защиты",        href: "/labour_protection/protection_training" },
      { title: "Охрана труда<br>при работе на высоте",               href: "/labour_protection/work_at_height" },
      { title: "Инструктаж<br>по охране труда",                      href: "/labour_protection/briefing" },
      { title: "Стажировка<br>на рабочем месте",                     href: "/labour_protection/traineeship" },
    ]
  })
}
</script>

<style lang="sass">@import "style"</style>
