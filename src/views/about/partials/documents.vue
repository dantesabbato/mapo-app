<template>
  <div id="documents">
    <p>
      Данный раздел создан Академией на основании требований определенных нормативных документов:
    </p>
    <ul>
      <li>
        Постановления Правительства РФ от 20.10.21г. N-1802 «об утверждении правил размещения
        на официальном сайте образовательного учреждения в сети "интернет" и обновления такой информации»
      </li>
      <li>Приказа ФСН в сфере науки и образования от 14.08.20г. за N-831 «об утверждении требований
        к структурной части официального сайта, к формату представления такой информации
        в информационно-телекоммуникационной сети "интернет"
      </li>
      <li>
        Cт. 29 - ч.2  Федерального закона N-273 "Об образовании в Российской Федерации"
      </li>
    </ul>
    <br>
    <p>
      <b>Реквизиты АНО ДПО "МАПО":</b>
    </p>
    <table class="table table-borderless table_entries table_desktop">
      <tbody>
        <tr><th>ИНН</th><td>9724053998</td><th>Расчетный счет</th><td>40703810738000019026</td></tr>
        <tr><th>КПП</th><td>772401001</td><th>Банк</th><td>ПАО СБЕРБАНК</td></tr>
        <tr><th>ОГРН</th><td>1217700339340</td><th>БИК</th><td>044525225</td></tr>
        <tr><th>ОКПО</th><td>53654013</td><th>Корр. счет</th><td>30101810400000000225</td></tr>
        <tr>
          <th>Директор</th><td>Ортинова Анастасия Николаевна</td><th>Юридический адрес</th>
          <td>109147, г. Москва, ул. Марксистская, д. 34, к. 8, пом. 1/1</td>
        </tr>
      </tbody>
    </table>
    <table class="table table-borderless table_entries table_mobile d-none">
      <tbody>
      <tr><th>ИНН</th><td>9724053998</td></tr>
      <tr><th>Расчетный счет</th><td>40703810738000019026</td></tr>
      <tr><th>КПП</th><td>772401001</td></tr>
      <tr><th>Банк</th><td>ПАО СБЕРБАНК</td></tr>
      <tr><th>ОГРН</th><td>1217700339340</td></tr>
      <tr><th>БИК</th><td>044525225</td></tr>
      <tr><th>ОКПО</th><td>53654013</td></tr>
      <tr><th>Корр. счет</th><td>30101810400000000225</td></tr>
      <tr>
        <th>Директор</th><td>Ортинова Анастасия Николаевна</td></tr>
        <tr><th>Юридический адрес</th><td>109147, г. Москва, ул. Марксистская, д. 34, к. 8, пом. 1/1</td>
      </tr>
      </tbody>
    </table>
    <Carousel :docs="docs" :path="docs_path" type="pdf"/>
  </div>
</template>

<script>
import Carousel from "@/components/carousel"
export default {
  name: "Docs",
  components: { Carousel },
  data: () => ({
    docs_path: "/docs/about/",
    docs: [
      "УСТАВ", "СВИДЕТЕЛЬСТВО ОГРН", "СВИДЕТЕЛЬСТВО ИНН", "ЛИЦЕНЗИЯ", "АККРЕДИТАЦИЯ МИНТРУДА C 01.03.2023Г",
      "АККРЕДИТАЦИЯ МИНТРУДА", "СЭЗ", "ПОЛОЖЕНИЕ ОБ АНО ДПО МАПО", "ПОЛОЖЕНИЕ О ПЕРСОНАЛЬНЫХ ДАННЫХ",
      "ПОЛОЖЕНИЕ О ПРАВИЛАХ ОКАЗАНИЯ ПЛАТНЫХ УСЛУГ", "ПРАВИЛА ПРИЕМА НА ОБУЧЕНИЕ", "ПРАВИЛА ВНУТРЕННЕГО РАСПОРЯДКА",
      "ПОЛОЖЕНИЕ О КАБИНЕТАХ И АУДИТОРИЯХ", "ПОЛОЖЕНИЕ О ДОКУМЕНТАЦИИ И ДОКУМЕНТООБОРОТЕ",
      "ПОЛОЖЕНИЕ ИТОГОВОЙ АТТЕСТАЦИИ ДПО", "ПОЛОЖЕНИЕ ИТОГОВОЙ АТТЕСТАЦИИ ПО", "ВЫПИСКА ЕГРЮЛ МАПО",
      "ПОРЯДОК ОФОРМЛЕНИЯ, ВЫДАЧИ И ХРАНЕНИЯ", "ПРОВЕДЕНИЕ АПЕЛЛЯЦИИ", "ПРОВЕДЕНИЕ ПРОМЕЖУТОЧНОЙ АТТЕСТАЦИИ",
      "ПОЛОЖЕНИЕ ОБ УЧЕБНОЙ И ПРОИЗВОДСТВЕННОЙ ПРАКТИКЕ", "ПОЛОЖЕНИЕ ОБ ОРГАНИЗАЦИИ ОБУЧЕНИЯ ПО ИНДИВИДУАЛЬНОМУ УП",
      "ПОЛОЖЕНИЕ ОБ ОРГАНИЗАЦИИ ОБУЧЕНИЯ ИНВАЛИДОВ"
    ]
  })
}
</script>

<style lang="sass">@import "../style"</style>
