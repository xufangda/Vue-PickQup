<template>
  <div class="index">
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
  .index
    min-width 6rem
    font-family  "BWHaasHead-95Black","PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Helvetica Neue","Helvetica","Arial","sans-serif"
</style>
