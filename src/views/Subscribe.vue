<template>
    <div class="subscribe">
      <h2>{{ $t('subscribeTitle') }}</h2>
      <form id="subscribeForm" action="https://formsubmit.co/ae13ee8bbcd4e22acd6e07e9e275bd47" method="POST" @submit.prevent="handleSubscribe">
        <input type="email" id="subscribeEmail" name="email" required :placeholder="$t('subscribePlaceholder')" v-model="email">
        <input type="hidden" name="_subject" value="New Subscribe Request">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" :value="successUrl">
        <button type="submit" class="submitButton" :disabled="isSubmitting">
          {{ isSubmitting ? $t('submitting') : $t('subscribeButton') }}
        </button>
      </form>
      <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Subscribe',
    data() {
      return {
        email: '',
        successUrl: `${window.location.origin}/subscribe-success`,
        isSubmitting: false
      }
    },
    methods: {
      handleSubscribe() {
        this.isSubmitting = true;
        setTimeout(() => {
          document.getElementById('subscribeForm').submit();
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