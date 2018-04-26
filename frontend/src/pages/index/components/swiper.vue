<template>
  <div class="swiper">
    <swiper :options="this.swiperOption">
      <!-- slides -->
      <swiper-slide class="s-wrapper">
        <img
          class="s-img"
          src="http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_640x200_e1b76963.jpg" alt=""
        >
      </swiper-slide>
      <swiper-slide><img
          class="s-img"
          src="http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg" alt=""
        >
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'IndexSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletElement: 'li'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

  .swiper
    width 100%
    .s-wrapper
    width 100%
    height 0
    padding-bottom 31%
    overflow hidden
    background #eee
    .s-img
      width 100%

</style>
