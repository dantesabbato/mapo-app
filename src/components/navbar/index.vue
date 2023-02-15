<template>
  <nav id="navbar" class="navbar navbar-expand-lg shadow fixed-top">
    <div class="container">
      <ul class="navbar-nav nav-viv">
        <li class="nav-item">
          <button :class="['btn', 'viv_button', isVIV ? 'btn-warning' : 'btn-dark', { 'viv_button-active': isVIV }]"
                  @click="toggleVersion"
          >
            <i class="bi bi-eyeglasses"></i>
            <span>Версия для<br>слабовидящих</span>
          </button>
        </li>
      </ul>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarToggler" :key="$route.path">
        <ul class="navbar-nav container">
          <li v-for="(item, i) in navbar"
              :class="['nav-item', item.dropdown ? 'dropdown' : '']"
              :key="i"
          >
            <router-link :to="item.href" class="nav-link">{{ item.title }}</router-link>
            <ul v-if="item.dropdown" class="dropdown-menu">
              <li v-for="(subitem, j) in item.dropdown"
                  :class="['nav-subitem', subitem.dropdown ? 'dropdown' : '']"
                  :key="j"
              >
                <router-link :to="subitem.href" class="dropdown-item">
                  {{ subitem.title }}<i v-if="subitem.dropdown" class="bi bi-caret-right-fill"></i>
                </router-link>
                <ul v-if="subitem.dropdown" class="dropdown-submenu">
                  <li v-for="(subsubitem, k) in subitem.dropdown" :key="k">
                    <router-link :to="subsubitem.href" class="dropdown-item">{{ subsubitem.title }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a target="_blank" class="nav-link" :href="portal_do">ПОРТАЛ ДО</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    data: () => ({
      portal_do: "https://cot.msk.ru/login/index.php",
      navbar: [
        { title: "Главная",    href: "/" },
        { title: "О компании", href: "/about",
          dropdown: [
            { title: "Основные сведения",                            href: "/about/basic_information" },
            { title: "Структура и органы управления",               href: "/about/structure" },
            { title: "Документы, лицензии и аккредитация",          href: "/about/documents" },
            { title: "Образование",                                 href: "/services" },
            { title: "Образовательные стандарты",                   href: "/about/standards" },
            { title: "Платные образовательные услуги",              href: "/about/paid_services" },
            { title: "Обработка персональных данных",               href: "/about/personal_data" },
            { title: "Материально-техническое обеспечение",         href: "/about/logistics" },
            { title: "Финансово-хозяйственная деятельность",        href: "/about/activities" },
            { title: "Вакансии",                                    href: "/about/vacancies" },
            { title: "Руководство",                                 href: "/about/management" },
            { title: "Доступная среда",                             href: "/about/environment" },
            { title: "Структура сайта",                             href: "/about/scheme" },
            { title: "Международное сотрудничество",                href: "/about/cooperation" }
          ]
        },
        { title: "Образование",     href: "/services",
          dropdown: [
            { title: "Дополнительное профессиональное образование", href: "/additional",
              dropdown: [
                { title: "Профессиональная переподготовка", href: "/additional/retraining" },
                { title: "Повышение квалификации",         href: "/additional/advanced" }
              ]
            },
            { title: "Обучение рабочих и служащих",                 href: "/training",
              dropdown: [
                { title: "Подготовка и переподготовка",     href: "/training/retraining" },
                { title: "Повышение квалификации",          href: "/training/advanced" }
              ]
            },
            { title: "Пожарная безопасность",                       href: "/fire_safety",
              dropdown: [
                { title: "Профессиональная переподготовка", href: "/fire_safety/retraining" },
                { title: "Повышение классификации",         href: "/fire_safety/advanced" }
              ]
            },
            { title: "Охрана труда",                                href: "/labour_protection",
              dropdown: [
                { title: "Обучение по оказанию первой помощи пострадавшим", href: "/labour_protection/first_aid_training" },
                { title: "Обучение требованиям охраны труда",               href: "/labour_protection/requirements_training" },
                { title: "Обучение по использованию средств защиты",        href: "/labour_protection/protection_training" },
                { title: "Инструктаж по охране труда",                      href: "/labour_protection/briefing" },
                { title: "Стажировка на рабочем месте",                     href: "/labour_protection/traineeship" }
              ]
            },
            { title: "Аттестация",                                  href: "/certification" }
          ]
        },
        { title: "Отзывы",     href: "/mention" },
        { title: "Контакты",   href: "/contacts" }
      ],
      isVIV: false
    }),
    methods: {
      toggleVersion() {
        this.isVIV = !this.isVIV
        this.$emit("toggleVersion", this.isVIV)
      }
    }
  }
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
