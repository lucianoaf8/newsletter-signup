<template>
    <div class="edit-preferences">
      <h2>{{ $t('editPreferencesTitle') }}</h2>
      <form @submit.prevent="savePreferences">
        <h3>{{ $t('newsletterSections') }}</h3>
        <div v-for="section in sections" :key="section">
          <label>
            <input type="checkbox" v-model="preferences.sections[section]">
            {{ $t(section) }}
          </label>
        </div>
  
        <h3>{{ $t('deliveryDays') }}</h3>
        <div v-for="day in days" :key="day">
          <label>
            <input type="checkbox" v-model="preferences.days[day]">
            {{ $t(day) }}
          </label>
        </div>
  
        <h3>{{ $t('interests') }}</h3>
        <input type="text" v-model="preferences.interests[0]" :placeholder="$t('interest1Placeholder')">
        <input type="text" v-model="preferences.interests[1]" :placeholder="$t('interest2Placeholder')">
        <input type="text" v-model="preferences.interests[2]" :placeholder="$t('interest3Placeholder')">
  
        <h3>{{ $t('language') }}</h3>
        <select v-model="preferences.language">
          <option value="en">{{ $t('languageEnglish') }}</option>
          <option value="pt">{{ $t('languagePortuguese') }}</option>
          <option value="both">{{ $t('languageBoth') }}</option>
        </select>
  
        <button type="submit" class="submitButton">{{ $t('savePreferences') }}</button>
      </form>
      <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditPreferences',
    data() {
      return {
        sections: ['weather', 'exchangeRates', 'quoteOfTheDay', 'funFact', 'englishWithLuca', 'onThisDay', 'breathingBox', 'dailyChallenge'],
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        preferences: {
          sections: {},
          days: {},
          interests: ['', '', ''],
          language: 'en'
        }
      }
    },
    methods: {
      savePreferences() {
        console.log('Preferences saved:', this.preferences);
        // Here you would typically send the preferences to your backend
        this.$router.push('/');
      }
    }
  }
  </script>