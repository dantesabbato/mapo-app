<template>
  <div id="services">
    <div class="background"/>
    <div>
      <!-----CARDS------>
      <div class="services">
        <div class="container">
          <div class="head">
            <div class="head__spans">
              <span>МЫ ПРЕДЛАГАЕМ</span>
              <span>ДЛЯ ВАС ТОЛЬКО ЛУЧШЕЕ</span>
            </div>
            <span class="head__title">ОСНОВНЫЕ НАПРАВЛЕНИЯ АКАДЕМИИ</span>
          </div>
          <Cards :items="services"/>
        </div>
      </div>
      <!------------------->
    </div>
  </div>
</template>

<script>
  import Cards from "@/components/cards"
  export default {
    components: { Cards },
    data: () => ({
      services: [
        { title: "Дополнительное<br>профессиональное<br>образование", href: "/additional" },
        { title: "Обучение<br>рабочих и служащих",                    href: "/training" },
        { title: "Пожарная<br>безопасность",                          href: "/fire_safety" },
        { title: "Охрана<br>труда",                                   href: "/labour_protection" },
        { title: "Аттестация и<br>предаттестационная подготовка",     href: "/certification" }
      ],
    })
  }
</script>

<style lang="sass">@import "./style"</style>
