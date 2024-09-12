<template>
    <div class="submit-error">
      <h2>{{ $t('submitErrorTitle') }}</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" :placeholder="$t('subjectPlaceholder')" v-model="subject" required>
        <textarea :placeholder="$t('errorDescriptionPlaceholder')" v-model="description" required></textarea>
        <button type="submit" class="submitButton">{{ $t('submitError') }}</button>
      </form>
      <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SubmitError',
    data() {
      return {
        subject: '',
        description: ''
      }
    },
    methods: {
      handleSubmit() {
        // Handle error submission logic here
        console.log('Error submitted:', this.subject, this.description);
        // You would typically make an API call here
        this.$router.push('/');
      }
    }
  }
  </script>