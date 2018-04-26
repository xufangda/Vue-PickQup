<template>
  <div class="form">
    <div class="form-item">
      <label class="item-label ">预计日期</label>
      <div class="item-input">
        <date-picker :value="date"></date-picker>
      </div>
    </div>
    <div class="form-item">
      <label class="item-label">落地机场</label>
      <input class="item-input" placeholder="伦敦希斯罗" type="text">
    </div>
    <div class="form-item">
      <label class="item-label">目的地</label>
      <input class="item-input" placeholder="伦敦 / 雷丁 / 巴斯" type="text">
    </div>
    <div class="form-item">
      <button class="item-btn">查 询</button>
    </div>

  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker'

export default {
  name: 'form',
  data () {
    return {
      date: new Date()
    }
  },
  components: {
    DatePicker
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
