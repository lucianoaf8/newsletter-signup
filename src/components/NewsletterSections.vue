<template>
    <div class="section-list">
      <div v-for="section in sections" :key="section.key" class="section-item">
        <h3>{{ $t(section.key) }}</h3>
        <p>{{ $t(section.key + 'Desc') }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsletterSections',
    data() {
      return {
        sections: [
          { key: 'weather' },
          { key: 'exchangeRates' },
          { key: 'quoteOfTheDay' },
          { key: 'funFact' },
          { key: 'englishWithLuca' },
          { key: 'onThisDay' },
          { key: 'breathingBox' },
          { key: 'dailyChallenge' }
        ]
      }
    }
  }
  </script>