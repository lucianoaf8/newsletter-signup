<template>
  <div class="subscribe">
    <h2>{{ $t('subscribeTitle') }}</h2>
    <form
      id="subscribeForm"
      action="https://formsubmit.co/ae13ee8bbcd4e22acd6e07e9e275bd47"
      method="POST"
      @submit.prevent="handleSubscribe"
    >
    <!-- Email Field -->
    <input
        type="email"
        id="subscribeEmail"
        name="email"
        required
        :placeholder="$t('subscribePlaceholder')"
        v-model="localEmail"
        class="neon-input"
        @input="emitEmail"
      />
      <!-- Integrate CustomOptions Component -->
      <CustomOptions
        :email="email"
        :city="city"
        :country="country"
        :interests="interests"
        :language="language"
        @update:email="updateEmail"
        @update:city="updateCity"
        @update:country="updateCountry"
        @update:interests="updateInterests"
        @update:language="updateLanguage"
      />

      <!-- Hidden Fields -->
      <input type="hidden" name="_subject" value="New Subscribe Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" :value="successUrl" />

      <!-- Submit Button -->
      <button type="submit" class="submit-button" :disabled="isSubmitting">
        {{ isSubmitting ? $t('submitting') : $t('subscribeButton') }}
      </button>
    </form>
    <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
  </div>
</template>

<script>
import CustomOptions from '@/components/CustomOptions.vue'; // Adjust the path as needed

export default {
  name: 'Subscribe',
  components: {
    CustomOptions,
  },
  data() {
    return {
      successUrl: `${window.location.origin}/#/subscribe-success`,
      isSubmitting: false,
      // Initialize custom option fields
      email: '',
      city: '',
      country: '',
      interests: ['', '', ''],
      language: 'en',
    };
  },
  methods: {
    handleSubscribe() {
      this.isSubmitting = true;

      // Submit the form to FormSubmit
      const form = document.getElementById('subscribeForm');
      form.submit(); // FormSubmit will handle the redirection to the _next URL
    },
    // Methods to handle updates from CustomOptions
    updateEmail(newEmail) {
      this.email = newEmail;
    },
    updateCity(newCity) {
      this.city = newCity;
    },
    updateCountry(newCountry) {
      this.country = newCountry;
    },
    updateInterests(newInterests) {
      this.interests = newInterests;
    },
    updateLanguage(newLanguage) {
      this.language = newLanguage;
    },
  },
};
</script>
