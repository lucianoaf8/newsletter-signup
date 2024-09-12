<template>
    <div class="submit-request">
      <h2>{{ $t('submitRequestTitle') }}</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" :placeholder="$t('subjectPlaceholder')" v-model="subject" required>
        <textarea :placeholder="$t('requestDescriptionPlaceholder')" v-model="description" required></textarea>
        <button type="submit" class="submitButton">{{ $t('submitRequest') }}</button>
      </form>
      <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SubmitRequest',
    data() {
      return {
        subject: '',
        description: ''
      }
    },
    methods: {
      handleSubmit() {
        // Handle request submission logic here
        console.log('Request submitted:', this.subject, this.description);
        // You would typically make an API call here
        this.$router.push('/');
      }
    }
  }
  </script>