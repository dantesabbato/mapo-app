<template>
  <div id="footer">
    <div class="contacts">
      <YandexMap class="container"
                 :coordinates="[55.734851, 37.665138]"
                 :zoom="15.4"
                 :controls="['zoomControl', 'fullscreenControl', 'routeEditor', 'geolocationControl']"
                 :behaviors="['disable', 'drag']"
      >
        <YandexMarker :coordinates="[55.734851, 37.665138]" :icon="marker_icon"/>
      </YandexMap>
      <div class="contacts_info container">
        <button data-bs-toggle="modal" data-bs-target="#modalRequest">ОТПРАВИТЬ ЗАЯВКУ</button>
        <span><img :src="require('@/assets/icons/geo-white.svg')">Москва, ул. Марксистская, д. 34, к. 8, пом. 1/1</span>
        <a href="tel:+74956986100"><img :src="require('@/assets/icons/phone-white.svg')">+7(495) 698-61-00</a>
      </div>
    </div>

    <div class="menu">
      <div class="container">
        <div class="menu__up">
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link to="/about/basic_information" class="nav-link p-0">Основные сведения</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/structure" class="nav-link p-0">Структура и органы управления</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/documents" class="nav-link p-0">Документы, лицензии и аккредитации</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/scheme" class="nav-link p-0">Структура сайта</router-link></li>
          </ul>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link to="/services" class="nav-link p-0">Образование</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/standards" class="nav-link p-0">Образовательные стандарты</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/paid_services" class="nav-link p-0">Платные образовательные услуги</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/cooperation" class="nav-link p-0">Международное сотрудничество</router-link></li>
          </ul>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link to="/about/personal_data" class="nav-link p-0">Политика конфиденциальности</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/logistics" class="nav-link p-0">Материально-техническое обеспечение</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/activities" class="nav-link p-0">Финансово-хозяйственная деятельность</router-link></li>
          </ul>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link to="/about/vacancies" class="nav-link p-0">Вакансии</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/management" class="nav-link p-0">Руководство</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about/environment" class="nav-link p-0">Доступная среда</router-link></li>
          </ul>
        </div>
        <div class="menu__down">
          <a href="/" class="text-decoration-none"><img :src="logo" height="70" width="70"></a>
          <p>Copyright © 2022-2024 АНО ДПО "Межрегиональная академия профессионального обучения"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { YandexMap, YandexMarker } from "vue-yandex-maps"
export default {
  components: { YandexMap, YandexMarker },
  data: () => ({
    logo: require("@/assets/images/logos/logo_2.svg"),
    marker_icon: {
      layout: "default#imageWithContent",
      imageHref: require("@/assets/icons/geo.svg"),
      imageSize: [43, 43],
      imageOffset: [0, 0],
      contentOffset: [0, 15]
    },
    icon_options: { scale: 2 }
  })
}
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
