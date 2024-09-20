<template>
  <div class="submit-request">
    <h2 class="title">{{ $t('submitRequestTitle') }}</h2>
    <form id="submitRequestForm" @submit.prevent="handleRequestSubmit" class="request-form">
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
        name="requestSubject"
        :placeholder="$t('subjectPlaceholder')"
        required
        class="neon-input"
        v-model="requestSubject"
      />
      <textarea
        name="requestDescription"
        :placeholder="$t('requestDescriptionPlaceholder')"
        required
        class="neon-textarea"
        v-model="requestDescription"
      ></textarea>
      <button
        type="submit"
        class="submit-button neon-button"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? $t('submitting') : $t('submitRequest') }}
      </button>
    </form>
    <router-link to="/" class="cta-button cta-home">{{
      $t('backToHome')
    }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'SubmitRequest',
  data() {
    return {
      isSubmitting: false,
      email: '',
      requestSubject: '',
      requestDescription: '',
      attachment: null, // To store the selected file
    };
  },
  methods: {
    handleFileUpload(event) {
      this.attachment = event.target.files[0];
    },
    async handleRequestSubmit() {
      this.isSubmitting = true;
      try {
        const formData = new FormData();
        formData.append('email', this.email);
        formData.append('requestSubject', this.requestSubject);
        formData.append('requestDescription', this.requestDescription);
        if (this.attachment) {
          formData.append('attachment', this.attachment);
        }
        formData.append('_subject', 'New Request Submission');
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

/* Styling for the file input */
.file-input {
  margin-top: 1em;
  /* Add any additional styling you desire */
}
</style>
