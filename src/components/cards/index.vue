<template>
  <div class="cards">
    <div class="card" v-for="item in items" :key="item">
      <router-link :to="item.href">
        <div class="card-body">
          <div class="card-image"><img src="./card-icon.svg"/></div>
          <div class="card-text" v-html="item.title"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>export default { name: "Cards", props: { items: Array } }</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
