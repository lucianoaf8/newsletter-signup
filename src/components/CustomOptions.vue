<!-- src/components/CustomOptions.vue -->
<template>
    <div class="custom-options">
  
      <!-- Location -->
    <div class="preference-card">
      <h3>{{ $t('location') }}</h3>
      <div class="location-inputs">
        <input
          type="text"
          name="city"
          required
          :placeholder="$t('cityPlaceholder')"
          v-model="localCity"
          class="neon-input"
          @input="emitCity"
        />
        <input
          type="text"
          name="country"
          required
          :placeholder="$t('countryPlaceholder')"
          v-model="localCountry"
          class="neon-input"
          @input="emitCountry"
        />
      </div>
    </div>
  
      <!-- Interests -->
      <div class="preference-card">
        <h3>{{ $t('interests') }}</h3>
        <div class="interest-inputs">
          <input
            type="text"
            v-model="localInterests[0]"
            :placeholder="$t('interest1Placeholder')"
            class="neon-input"
            @input="emitInterests"
          />
          <input
            type="text"
            v-model="localInterests[1]"
            :placeholder="$t('interest2Placeholder')"
            class="neon-input"
            @input="emitInterests"
          />
          <input
            type="text"
            v-model="localInterests[2]"
            :placeholder="$t('interest3Placeholder')"
            class="neon-input"
            @input="emitInterests"
          />
        </div>
      </div>
  
      <!-- Language Dropdown -->
      <div class="preference-card">
        <h3>{{ $t('language') }}</h3>
        <div class="language-inputs">
          <select
            v-model="localLanguage"
            class="neon-select language-select"
            @change="emitLanguage"
          >
            <option value="en">{{ $t('languageEnglish') }}</option>
            <!-- Removed Portuguese option -->
            <option value="both">{{ $t('languageEnglishPortuguese') }}</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomOptions',
    props: {
      email: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      interests: {
        type: Array,
        required: true,
        validator: value => value.length === 3
      },
      language: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        localEmail: this.email,
        localCity: this.city,
        localCountry: this.country,
        localInterests: [...this.interests],
        localLanguage: this.language
      };
    },
    watch: {
      email(newVal) {
        this.localEmail = newVal;
      },
      city(newVal) {
        this.localCity = newVal;
      },
      country(newVal) {
        this.localCountry = newVal;
      },
      interests(newVal) {
        this.localInterests = [...newVal];
      },
      language(newVal) {
        this.localLanguage = newVal;
      }
    },
    methods: {
      emitEmail() {
        this.$emit('update:email', this.localEmail);
      },
      emitCity() {
        this.$emit('update:city', this.localCity);
      },
      emitCountry() {
        this.$emit('update:country', this.localCountry);
      },
      emitInterests() {
        this.$emit('update:interests', this.localInterests);
      },
      emitLanguage() {
        this.$emit('update:language', this.localLanguage);
      }
    }
  };
  </script>
