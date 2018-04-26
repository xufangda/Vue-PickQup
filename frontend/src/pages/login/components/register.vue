<template>
  <div class="form">
    <form action='/api/login'>
    <div class="form-item">
      <label class="item-label">用户名</label>
      <input type="username" class="item-input" placeholder="邮箱/用户名" >
    </div>
    <div class="form-item">
      <label class="item-label">密  码</label>
      <input type="password" class="item-input" placeholder="请输入密码" >
    </div>
    <div class="form-item">
      <button type="submit" class="item-btn">登 录</button>
    </div>
    </form>

  </div>
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
      date: new Date()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .form
    padding .1rem .4rem
    .form-item
      padding .06rem 0
      .border-bottom
        color black
      .item-label
        font-size .3rem
        line-height .6rem
        height .6rem
        font-weight bold
      .item-input >>> .vdp-datepicker__calendar
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        width 100%
      .item-input
        font-size .36rem
        padding .16rem .16rem
        box-sizing border-box
        width 100%
        background white
        border .02rem solid
        border-color #ccc
      .item-input::placeholder
        color #aaa
      .item-btn
        text-align center
        font-size .36rem
        margin-top .2rem
        padding .2rem .14rem
        box-sizing border-box
        width 100%
        background $bgColor
        color white
        font-weight bold
        border-radius .08rem
</style>
