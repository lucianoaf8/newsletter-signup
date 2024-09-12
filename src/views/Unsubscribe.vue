<template>
    <div class="unsubscribe">
      <h2>{{ $t('unsubscribeTitle') }}</h2>
      <form id="unsubscribeForm" action="https://formsubmit.co/ae13ee8bbcd4e22acd6e07e9e275bd47" method="POST" @submit.prevent="handleUnsubscribe">
        <input type="email" id="unsubscribeEmail" name="email" required :placeholder="$t('unsubscribePlaceholder')" v-model="email">
        <input type="hidden" name="_subject" value="New Unsubscribe Request">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" :value="successUrl">
        <button type="submit" class="submitButton" :disabled="isSubmitting">
          {{ isSubmitting ? $t('submitting') : $t('unsubscribeButton') }}
        </button>
      </form>
      <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Unsubscribe',
    data() {
      return {
        email: '',
        successUrl: `${window.location.origin}/unsubscribe-success`,
        isSubmitting: false
      }
    },
    methods: {
      handleUnsubscribe() {
        this.isSubmitting = true;
        setTimeout(() => {
          document.getElementById('unsubscribeForm').submit();
        }, 1000);
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