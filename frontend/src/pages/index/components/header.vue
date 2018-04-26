<template>
  <div class="header">
    <div class="header-logo">PickQup</div>
    <div class="header-info">
      <div class="header-item"><a class="btn-post" href="/register">接机团队</a></div>|
      <div class="header-item"><a class="btn-login" href="/register">登录注册</a></div>
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
      .btn-login
        color white
      .btn-post
        color white
</style>
