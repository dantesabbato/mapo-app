<template>
  <div id="contacts">
    <div class="header">
      <div class="container">
        <div class="header__title">Контакты</div>
        <ContactsButton/>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <h3>
          Автономная некоммерческая организация<br>дополнительного профессионального
          образования <br>«Межрегиональная академия профессионального обучения»
        </h3>

        <p>
          <b>Адрес местонахождения:</b> 115230, г. Москва, проезд 1-й Нагатинский, д. 10, стр. 1, этаж 6,
          пом. XXXIII
        </p>

        <p>
          <b>Справочный телефон:</b> +7(495) 698-61-00
        </p>

        <p>
          <b>E-mail:</b> info@mapo-dpo.ru
        </p>

        <p>
          <b>График работы института:</b> Понедельник-пятница с 9:30 до 18:00
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsButton from "@/components/contacts_button"
export default {
  components: { ContactsButton },
  name: "Contacts",
  data: () => ({
  })
}
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
</style>
