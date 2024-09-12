<template>
    <div id="languageToggle">
      <button @click="setLanguage('en')" :class="{ activeLanguageButton: currentLanguage === 'en' }" class="languageButton">EN</button>
      <button @click="setLanguage('pt')" :class="{ activeLanguageButton: currentLanguage === 'pt' }" class="languageButton">PT</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguageToggle',
    data() {
      return {
        currentLanguage: 'en'
      }
    },
    methods: {
      setLanguage(lang) {
        this.currentLanguage = lang;
        this.$i18n.locale = lang;
      }
    },
    mounted() {
      this.currentLanguage = this.$i18n.locale;
    }
  }
  </script>