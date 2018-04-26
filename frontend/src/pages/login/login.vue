<template>
  <div class="index">
    <login-header></login-header>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginHeader from '../components/header'
import LoginForm from './components/register'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginForm
  }
}
</script>

<style lang="stylus" scoped>
  .index
    min-width 6rem
</style>
