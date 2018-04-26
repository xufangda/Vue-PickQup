<template>
  <div class="header">
    <div class="header-logo"><router-link tag="a" class="btn-link" to="/">PickQup</router-link></div>
    <div class="header-info">
      <div class="header-item"><a class="btn-link" href="/">接机团队</a></div>|
      <div class="header-item"><router-link class="btn-link" to="/login/">登录注册</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  height 1rem
  line-height 1rem
  padding 0 .2rem
  background $bgColor
  align-items center
  font-size .36rem
  .btn-link
    color white
  .header-logo
    float left
    color white
    font-size .46rem
    padding 0 .1rem
  .header-info
    display flex
    float right
    color white
    .header-item
      padding 0 .1rem

</style>
