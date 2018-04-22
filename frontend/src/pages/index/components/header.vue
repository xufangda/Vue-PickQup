<template>
  <div class="header">
    <div class="header-logo">PickQup</div>
    <div class="header-info">
      <div>发布</div>
      <div>登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="stylus" scoped>
.header
  height 1rem
  line-height 1rem
  background #42b983
  align-items center
  .header-logo
    float left
    background red
  .header-info
    display flex
    float right
    background yellow
</style>
