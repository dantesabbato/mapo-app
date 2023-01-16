<template>
  <div id="construction_banner">
    <img :src="require('@/assets/images/backgrounds/construction.png')" height="400">
    <span>Данный раздел в раработке</span>
  </div>
</template>

<style lang="sass">
#construction_banner
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 60px 0
  span
    text-transform: uppercase
    color: #b7b7b7
    font-size: 3em
</style>