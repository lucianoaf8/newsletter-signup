<!-- src/views/EditPreferences.vue -->
<template>
  <div class="edit-preferences">
    <h2 class="title">{{ $t('editPreferencesTitle') }}</h2>
    <form id="editPreferencesForm" @submit.prevent="handleSubmit" class="preferences-form">
      
      <!-- Custom Options Component -->
      <CustomOptions
        :email="email"
        :city="city"
        :country="country"
        :interests="preferences.interests"
        :language="preferences.language"
        @update:email="email = $event"
        @update:city="city = $event"
        @update:country="country = $event"
        @update:interests="updateInterests($event)"
        @update:language="preferences.language = $event"
      />

      <!-- Newsletter Sections -->
      <div class="preference-card">
        <h3>{{ $t('newsletterSections') }}</h3>
        <div class="preferences-grid">
          <div
            v-for="section in sectionsList"
            :key="section"
            class="preference-option"
          >
            <label>
              <input
                type="checkbox"
                v-model="sections[section]"
                class="neon-checkbox"
              />
              <span class="label-text">{{ $t(section) }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Delivery Days -->
      <div class="preference-card">
        <h3>{{ $t('deliveryDays') }}</h3>
        <div class="preferences-grid">
          <div
            v-for="day in daysList"
            :key="day"
            class="preference-option"
          >
            <label>
              <input
                type="checkbox"
                v-model="days[day]"
                class="neon-checkbox"
              />
              <span class="label-text">{{ $t(day) }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Hidden Inputs for Form Submission -->
      <input type="hidden" name="sections" :value="JSON.stringify(sections)" />
      <input type="hidden" name="days" :value="JSON.stringify(days)" />
      <input type="hidden" name="interests" :value="preferences.interests.join(', ')" />
      <input type="hidden" name="language" :value="preferences.language" />
      <input type="hidden" name="email" :value="email" />
      <input type="hidden" name="city" :value="city" />
      <input type="hidden" name="country" :value="country" />

      <!-- Submit Button -->
      <button type="submit" class="submit-button neon-button" :disabled="isSubmitting">
        {{ isSubmitting ? $t('submitting') : $t('savePreferences') }}
      </button>
    </form>

    <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
  </div>
</template>

<script>
import CustomOptions from '@/components/CustomOptions.vue';

export default {
  name: 'EditPreferences',
  components: {
    CustomOptions
  },
  data() {
    // Define the list of sections and days
    const sectionsList = [
      'weather',
      'exchangeRates',
      'quoteOfTheDay',
      'funFact',
      'englishWithLuca',
      'onThisDay',
      'breathingBox',
      'dailyChallenge'
    ];

    const daysList = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ];

    // Initialize sections and days with all options set to false
    const sections = {};
    sectionsList.forEach(section => {
      sections[section] = true;
    });

    const days = {};
    daysList.forEach(day => {
      days[day] = true;
    });

    return {
      email: '',
      city: '',
      country: '',
      sectionsList,
      daysList,
      sections,
      days,
      preferences: {
        interests: ['', '', ''],
        language: 'en',
      },
      isSubmitting: false,
    };
  },
  methods: {
    updateInterests(newInterests) {
      console.log('Updating interests:', newInterests);
      this.preferences.interests = newInterests;
    },
    async handleSubmit() {
      this.isSubmitting = true;
      console.log('Submitting form with:', {
        email: this.email,
        city: this.city,
        country: this.country,
        sections: this.sections,
        days: this.days,
        interests: this.preferences.interests,
        language: this.preferences.language
      });

      try {
        const formData = new FormData();
        formData.append('email', this.email);
        formData.append('city', this.city);
        formData.append('country', this.country);
        formData.append('sections', JSON.stringify(this.sections));
        formData.append('days', JSON.stringify(this.days));
        formData.append('interests', this.preferences.interests.join(', '));
        formData.append('language', this.preferences.language);
        formData.append('_subject', 'Edit Preferences Request');
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        const response = await fetch('https://formsubmit.co/ajax/ae13ee8bbcd4e22acd6e07e9e275bd47', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Navigate to success page
          this.$router.push('/success-page');
        } else {
          // Handle submission error
          const errorText = await response.text();
          console.error('Form submission failed:', errorText);
          alert('Form submission failed. Please try again.');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred while submitting the form. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
