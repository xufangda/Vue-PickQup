<template>
  <div class="index">
      <index-header></index-header>
      <index-swiper></index-swiper>
      <index-form></index-form>
  </div>
</template>

<script>
import IndexHeader from '../components/header'
import IndexSwiper from './components/swiper'
import IndexForm from './components/form'
export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexForm
  }
}
</script>

<style lang="stylus" scoped>
</style>
