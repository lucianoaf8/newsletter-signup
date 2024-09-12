<template>
  <div id="app">
    <LanguageToggle />
    <div id="background">
      <div class="background-circle"></div>
      <div class="background-circle"></div>
      <div class="background-circle"></div>
    </div>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LanguageToggle from './components/LanguageToggle.vue'

export default {
  name: 'App',
  components: {
    LanguageToggle
  }
}
</script>

<style>
/* You can include your global styles here or in a separate CSS file */
</style>