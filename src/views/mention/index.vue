<template>
  <div id="mention">
    <div class="container">
      <h1>Отзывы о нас</h1>
      <h4>Нам важно ваше мнение, мы примем во внимание каждый отзыв</h4>
      <Carousel :docs="docs" :path="docs_path" :type="doc_type"/>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/carousel"
export default {
  components: { Carousel },
  data: () => ({
    docs: [
      "ЗАО «Мясищев-Техсервис»", "ММБИ РАН", "ООО «ВТ-металл»", "СК «ВОССТРАХ»", "ФГУП «РТРС» филиал «МРЦ»",
      "ООО «Золотой век»", "ООО «Родияр Технолоджи»", "ООО «Сигнал-Безопасность»", "ООО «Сигнал-Безопасность Плюс»",
      "ПК «САТУРН»", "РЕМСТРОЙПРОЕКТ БИС"
    ],
    docs_path: "/docs/comments/", doc_type: "png"
  })
}
</script>

<style lang="sass">@import "style"</style>