<template>
  <div>
    <h4>
      Настоящая Политика АНО ДПО «МАПО» в отношении обработки персональных данных разработана во исполнение
      требований п.2 ч.1 ст.18.1 Федерального закона "О персональных данных" от 27.07.2006 N 152-ФЗ:
    </h4>
    <p>Политика АНО ДПО «МАПО» в отношении обработки персональных данных</p>
  </div>
  <a href="/docs/about/ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ.pdf"
     target="_blank"
     class="doc-cascade"
  >
    <img v-for="n in 3"
         :key="n"
         :src="require(`/public/docs/about/previews/ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ ${n}.png`)"
         height="400"
         class="shadow"
    >
  </a>
</template>

<style lang="sass">@import "../style"</style>