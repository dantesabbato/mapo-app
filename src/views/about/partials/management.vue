<template>
  <div id="management">
    <table class="table table-borderless table_desktop">
      <thead>
        <tr>
          <th v-html="header.number"/>
          <th v-html="header.post"/>
          <th v-html="header.name"/>
          <th v-html="header.experience"/>
          <th v-html="header.contacts"/>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(manager, index) in management" :key="manager">
          <td>{{ index + 1 }}</td>
          <td v-html="manager.post"/>
          <td v-html="manager.name"/>
          <td v-html="manager.experience"/>
          <td v-html="manager.contacts"/>
        </tr>
      </tbody>
    </table>

    <table class="table table-borderless table_mobile d-none">
      <tbody>
        <template v-for="(manager, index) in management" :key="manager">
          <tr><th v-html="header.number"/><td>{{ index }}</td></tr>
          <tr><th v-html="header.post"/><td v-html="manager.post"/></tr>
          <tr><th v-html="header.name"/><td v-html="manager.name"/></tr>
          <tr><th v-html="header.experience"/><td v-html="manager.experience"/></tr>
          <tr><th v-html="header.contacts"/><td v-html="manager.contacts"/></tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    header: { number: "№<br>п/п", post: "Должность", name: "Фамилия Имя Отчество", experience: "Стаж работы", contacts: "Контактные данные" },
    management: [
      { post: "Директор", name: "Ортинова Анастасия Николаевна", experience: "Руководящий стаж 7 лет", contacts: "Тел. +7(495) 698-61-00<br>e-mail: oan@sgcert.ru" },
      { post: "Заместитель директора по Учебно-методической работе", name: "Озерова Ирина Васильевна", experience: "Непрерывный стаж 7 лет", contacts: "Тел. +7(495) 698-61-00<br>e-mail: oiv@sgcert.ru" },
      { post: "Заместитель директора по развитию", name: "Озеров Юрий Борисович", experience: "Непрерывный стаж 7 лет", contacts: "Тел. +7(495) 698-61-00<br>e-mail: oub@sgcert.ru" },
      { post: "Руководитель<br>Технического отдела", name: "Кизилова Елена Владимировна", experience: "Непрерывный стаж 5 лет", contacts: "Тел. +7(495) 698-61-00<br>e-mail: kev@sgcert.ru" },
      { post: "Преподаватель", name: "Аппарович Татьяна Васильевна", experience: "Непрерывный педагогический стаж 6 лет 2 месяца", contacts: "Тел. +7(495) 698-61-00<br>e-mail: tav@sgcert.ru" },
      { post: "Преподаватель", name: "Лаптев Андрей Феликсович", experience: "Педагогический стаж 6 лет 5 месяцев", contacts: "Тел. +7(495) 698-61-00<br>e-mail: laf@sgcert.ru" },
      { post: "Преподаватель", name: "Корнаков Сергей Викторович", experience: "Педагогический стаж 6 лет 11 месяцев", contacts: "Тел. +7(495) 698-61-00<br>e-mail: ksv@sgcert.ru" },
      { post: "Преподаватель", name: "Кухаренко Иван Викторович", experience: "Педагогический стаж 5 лет 3 месяца", contacts: "Тел. +7(495) 698-61-00<br>e-mail: kiv@sgcert.ru" }
    ]
  })
}
</script>

<style lang="sass">
@import "../style"
@import "../management"
</style>
