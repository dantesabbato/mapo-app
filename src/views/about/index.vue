<template>
  <div id="about">
    <div class="background"/>
    <div class="header">
      <div class="container">
        <div class="header__title">О компании</div>
        <ContactsButton/>
      </div>
    </div>
    <div class="container">
      <Tags :pages="pages"/>
      <h1 v-if="$route.name !== 'О компании'">{{ $route.name }}</h1>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import ContactsButton from "@/components/contacts_button"
import Tags from "@/components/tags"
export default {
  name: "About",
  components: { ContactsButton, Tags },
  data: () => ({
    pages: [
      { title: "Основные сведения",                    href: "/about/basic_information" },
      { title: "Структура и органы управления",        href: "/about/structure" },
      { title: "Документы, лицензии и аккредитации",   href: "/about/documents" },
      { title: "Образование",                          href: "/services" },
      { title: "Образовательные стандарты",            href: "/about/standards" },
      { title: "Платные образовательные услуги",       href: "/about/paid_services" },
      { title: "Политика конфиденциальности",          href: "/about/personal_data" },
      { title: "Материально-техническое обеспечение",  href: "/about/logistics" },
      { title: "Финансовая деятельность",              href: "/about/activities" },
      { title: "Вакансии",                             href: "/about/vacancies" },
      { title: "Руководство",                          href: "/about/management" },
      { title: "Доступная среда",                      href: "/about/environment" },
      { title: "Структура сайта",                      href: "/about/scheme" },
      { title: "Международное сотрудничество",         href: "/about/cooperation" }
    ]
  }),
  methods: {
  }
}
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
