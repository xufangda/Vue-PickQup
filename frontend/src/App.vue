<template>
  <div id="app" class="app">
    <div class="wrapper">
      <router-view class="anchored"/>
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
    .wrapper
      display inline-block
      background #ffffff
      width 100%
      max-width 12rem
      min-width 6rem
      text-align left
</style>
