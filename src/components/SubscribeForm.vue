<template>
    <form @submit.prevent="handleSubmit">
      <input type="email" :placeholder="$t('subscribePlaceholder')" v-model="email" required>
      <button type="submit" class="submitButton" :disabled="isSubmitting">
        {{ isSubmitting ? $t('submitting') : $t('subscribeButton') }}
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'SubscribeForm',
    data() {
      return {
        email: '',
        isSubmitting: false
      }
    },
    methods: {
      handleSubmit() {
        this.isSubmitting = true;
        
        // Simulate API call or form submission
        setTimeout(() => {
          console.log('Subscribing:', this.email);
          // Here you would typically make an API call
          // After the API call is complete:
          this.isSubmitting = false;
          this.$router.push('/subscribe-success');
        }, 1500); // Simulating a delay for demonstration
      }
    }
  }
  </script>
  
  <style scoped>
  .submitButton:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  </style>