<template>
  <div>
    <index-header></index-header>
    <index-swiper></index-swiper>
  </div>
</template>

<script>
import IndexHeader from './components/header'
import IndexSwiper from './components/swiper'
export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper
  }

}
</script>

<style lang="stylus" scoped>

</style>
