<template>
  <div class="edit-preferences">
    <h2 class="title">{{ $t('editPreferencesTitle') }}</h2>
    <<form id="editPreferencesForm" action="https://formsubmit.co/your-formsubmit-id" method="POST" @submit.prevent="savePreferences" class="preferences-form">
      <input type="hidden" name="_subject" value="Edit Preferences Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" :value="successUrl" />
      
      <!-- Newsletter Sections -->
      <div class="preference-card">
        <h3>{{ $t('newsletterSections') }}</h3>
        <div class="preferences-grid">
          <div v-for="section in sections" :key="section" class="preference-option">
            <label>
              <input type="checkbox" v-model="preferences.sections[section]" class="neon-checkbox">
              <span class="label-text">{{ $t(section) }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Delivery Days -->
      <div class="preference-card">
        <h3>{{ $t('deliveryDays') }}</h3>
        <div class="preferences-grid">
          <div v-for="day in days" :key="day" class="preference-option">
            <label>
              <input type="checkbox" v-model="preferences.days[day]" class="neon-checkbox">
              <span class="label-text">{{ $t(day) }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Interests -->
      <div class="preference-card">
        <h3>{{ $t('interests') }}</h3>
        <div class="interest-inputs">
          <input type="text" v-model="preferences.interests[0]" :placeholder="$t('interest1Placeholder')" class="neon-input">
          <input type="text" v-model="preferences.interests[1]" :placeholder="$t('interest2Placeholder')" class="neon-input">
          <input type="text" v-model="preferences.interests[2]" :placeholder="$t('interest3Placeholder')" class="neon-input">
        </div>
      </div>

      <!-- Language -->
      <div class="preference-card">
        <h3>{{ $t('language') }}</h3>
        <select v-model="preferences.language" class="neon-select">
          <option value="en">{{ $t('languageEnglish') }}</option>
          <option value="pt">{{ $t('languagePortuguese') }}</option>
          <option value="both">{{ $t('languageBoth') }}</option>
        </select>
      </div>

      <input type="hidden" name="sections" :value="JSON.stringify(preferences.sections)" />
      <input type="hidden" name="days" :value="JSON.stringify(preferences.days)" />
      <input type="hidden" name="interests" :value="preferences.interests.join(', ')" />
      <input type="hidden" name="language" :value="preferences.language" />

      <!-- Submit Button -->
      <button type="submit" class="submit-button neon-button">{{ $t('savePreferences') }}</button>
    </form>

    <router-link to="/" class="cta-button neon-cta">{{ $t('backToHome') }}</router-link>
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
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.edit-preferences {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 247, 255, 0.2);
  color: #ffffff;
  font-family: 'Rajdhani', sans-serif;
}

.title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(45deg, #00f7ff, #ff00e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.preferences-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.preference-card {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.preferences-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.preference-option {
  display: flex;
  align-items: center;
}

.neon-checkbox {
  margin-right: 10px;
}

.label-text {
  font-size: 1.2rem;
}

.neon-input, .neon-select {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 247, 255, 0.2);
  transition: all 0.3s ease;
}

.neon-input:focus, .neon-select:focus {
  box-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
}

.submit-button {
  padding: 15px;
  background-color: transparent;
  border: 2px solid #00f7ff;
  color: #00f7ff;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #00f7ff;
  color: #0a0a2a;
  box-shadow: 0 10px 20px rgba(0, 247, 255, 0.3);
}

.cta-button {
  text-align: center;
  display: block;
  margin-top: 20px;
}

.neon-cta {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.neon-cta:hover {
  background-color: #ff00e6;
  color: #0a0a2a;
}
</style>
