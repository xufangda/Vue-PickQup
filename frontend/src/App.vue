<template>
  <div id="app" class="app">
    <div class="wrapper">
      <transition
      :enter-active-class="transitionIn"
      :leave-active-class="transitionOut"
      >
        <router-view class="anchored"/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionLeft: true
    }
  },
  computed: {
    transitionIn: function () {
      if (this.transitionLeft) {
        return 'animated fadeInLeft'
      } else {
        return 'animated fadeInRight'
      }
    },
    transitionOut: function () {
      if (this.transitionLeft) {
        return 'animated fadeOutRight'
      } else {
        return 'animated fadeOutLeft'
      }
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionLeft = toDepth < fromDepth
    }
  }
}
</script>

<style lang="stylus" scoped>
  .app
    text-align center
    background #eee
    width 100%
    display flex
    justify-content center
    .wrapper
      flex 1
      position relative
      width 100%
      max-width 12rem
      min-width 6rem
      background red
      .anchored
        position absolute
        width 100%
        height 100%
        background black
</style>
