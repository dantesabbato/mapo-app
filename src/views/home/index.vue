<template>
  <div id="home">
    <div class="background-main" :class="getTime"/>
    <div class="container">
      <!-- BANNER -->
      <div class="banner">
        <div class="banner__up">
          <div class="banner_logo">
            <img :src="logo" height="150">
            <div class="banner_title d-none">Межрегиональная академия<br>профессионального обучения</div>
            <div class="banner_title">АНО ДПО «МАПО»</div>
          </div>

          <div class="banner_buttons">
            <ContactsButton/>
            <button class="request_button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modalRequest"
            >
              <img :src="require('@/assets/icons/mail.svg')" height="44">
              <span>ОСТАВИТЬ <b>ЗАЯВКУ</b></span>
            </button>
          </div>
        </div>
        <div class="banner__down">
          <div class="block d-none">
            <span class="block__up">Лучшая</span>
            <span class="block__middle">Академия</span>
            <span class="block__down">В Москве</span>
          </div>
          <div class="block">
            <span class="block__middle">МЕЖРЕГИОНАЛЬНАЯ АКАДЕМИЯ<br>ПРОФЕССИОНАЛЬНОГО ОБУЧЕНИЯ</span>
          </div>
          <div class="banner_cards">
            <div class="head">
              <div class="head__spans">

              </div>
            </div>
            <Cards :items="services"/>
          </div>
        </div>
      </div>
    </div>
    <!----------->
    <!-----ABOUT US------>
    <div class="about">
      <div class="container">
        <div class="about__up">
          <img :src="require('./books.png')">
          <div class="content">
            <h1>Главная</h1>
            <span>Немного о нас</span>
            <p>
              АНО ДПО “Межрегиональная академия профессионального обучения”, проводит свою основную деятельность
              в направлениях Дополнительного профессионального образования и Профессионального обучения,
              Охраны труда и Пожарной безопасности, и является одним из ведущих столичных образовательных
              учреждений по освоению самых последних современных технологий в образовательном процессе.
            </p>
            <p>
              АНО ДПО “Межрегиональная академия профессионального обучения” активно участвует
              в информационной деятельности, пропаганде передового опыта, проведении дополнительных курсов
              по охране труда и техники безопасности на объектах строительного комплекса. Несмотря на положительные
              изменения в динамике развития, коллектив нашей академии не довольствуется достигнутым и стремиться
              к дальнейшему развитию и улучшению качества обучения и образовательного процесса.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
    <!-----FEEDBACK------>
    <div class="feedback">
      <div class="container">
        <div class="feedback__left">
          <img :src="require('./callback.png')">
          <div class="feedback__left-words">
            <span class="first">Остались вопросы</span>
            <span class="second">Напишите нам!</span>
            <span class="third">Мы с радостью ответим на все ваши вопросы!</span>
          </div>
        </div>
        <div class="feedback__right">
          <form @submit.prevent="sendForm">
            <span>Оставить заявку</span>
            <input placeholder="Ваше имя" type="text">
            <input placeholder="Телефон *" type="text">
            <input placeholder="Email" type="text">
            <input placeholder="Комментарий" type="text">
            <button>Отправить</button>
            <div class="form-check">
              <input class="form-check-input"
                     type="checkbox"
                     id="checkAgreement"
              >
              <label>
                Согласен на <a href="/docs/soglasie_na_obrabotku_personaljnyx_dannyx.pdf" target="_blank">
                обработку персональных данных </a>*
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!------------------->
    <!-----MENTION------>
    <div class="mention">
      <div class="container">
        <h1>Отзывы о нас</h1>
        <h4>Нам важно ваше мнение, мы примем во внимание каждый отзыв</h4>
          <Carousel :docs="docs" :path="docs_path" :type="doc_type"/>
      </div>
    </div>
    <!------------------->
  </div>
</template>

<script>
import Cards from "@/components/cards"
import ContactsButton from "@/components/contacts_button"
import Carousel from "@/components/carousel"
export default {
  name: "Home",
  components: { Cards, ContactsButton, Carousel },
  data: () => ({
    logo: require("@/assets/images/logos/logo_2.png"),
    services: [
      { title: "Дополнительное профессиональное образование",   href: "/additional" },
      { title: "Обучение<br>рабочих и служащих",                href: "/training" },
      { title: "Пожарная<br>безопасность",                      href: "/fire_safety" },
      { title: "Охрана<br>труда",                               href: "/labour_protection" },
      { title: "Аттестация и<br>предаттестационная подготовка", href: "/certification" }
    ],
    docs: [
      "Банк Русский Стандарт", "ЗАО «Мясищев-Техсервис»", "ММБИ РАН", "ООО «ВТ-металл»", "СК «ВОССТРАХ»",
      "ФГУП «РТРС» филиал «МРЦ»", "ООО «Золотой век»", "ООО «Родияр Технолоджи»", "ООО «Сигнал-Безопасность»",
      "ООО «Сигнал-Безопасность Плюс»", "ПК «САТУРН»", "РЕМСТРОЙПРОЕКТ БИС", "ООО «Витта компани»"
    ],
    docs_path: "/docs/comments/", doc_type: "png"
  }),
  computed: {
    getTime() {
      let currentHours = new Date().getHours()
      return currentHours < 17 && currentHours > 5 ? "day" : "night"
    }
  },
  methods: {
    sendForm() {}
  }
}
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
