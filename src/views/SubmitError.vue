<template>
  <div class="submit-error">
    <h2 class="title">{{ $t('submitErrorTitle') }}</h2>
    <form id="submitErrorForm" @submit.prevent="handleErrorSubmit" class="error-form">
      <input
        type="email"
        id="subscribeEmail"
        name="email"
        required
        :placeholder="$t('subscribePlaceholder')"
        v-model="email"
        class="neon-input"
      />
      <input
        type="text"
        name="errorSubject"
        :placeholder="$t('subjectPlaceholder')"
        required
        class="neon-input"
        v-model="errorSubject"
      />
      <textarea
        name="errorDescription"
        :placeholder="$t('errorDescriptionPlaceholder')"
        required
        class="neon-textarea"
        v-model="errorDescription"
      ></textarea>
      <button
        type="submit"
        class="submit-button neon-button"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? $t('submitting') : $t('submitError') }}
      </button>
    </form>
    <router-link to="/" class="cta-button neon-cta cta-home">{{ $t('backToHome') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'SubmitError',
  data() {
    return {
      isSubmitting: false,
      email: '',
      errorSubject: '',
      errorDescription: ''
    };
  },
  methods: {
    async handleErrorSubmit() {
      this.isSubmitting = true;
      try {
        const formData = new FormData();
        formData.append('email', this.email);
        formData.append('errorSubject', this.errorSubject);
        formData.append('errorDescription', this.errorDescription);
        if (this.attachment) {
          formData.append('attachment', this.attachment);
        }
        formData.append('_subject', 'New Error Submission');
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        const response = await fetch(
          'https://formsubmit.co/ajax/ae13ee8bbcd4e22acd6e07e9e275bd47',
          {
            method: 'POST',
            body: formData,
          }
        );

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

<style scoped>
.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

</style>
