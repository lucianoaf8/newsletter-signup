<template>
  <div class="subscribe">
    <h2>{{ $t('subscribeTitle') }}</h2>
    <form id="subscribeForm" action="https://formsubmit.co/ae13ee8bbcd4e22acd6e07e9e275bd47" method="POST" @submit.prevent="handleSubscribe">
      <input type="email" id="subscribeEmail" name="email" required :placeholder="$t('subscribePlaceholder')" v-model="email" />
      <input type="hidden" name="_subject" value="New Subscribe Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <!-- Keep _next for FormSubmit redirection -->
      <input type="hidden" name="_next" :value="successUrl" />
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
      // Correct the success URL to include the hash for Vue Router hash mode
      successUrl: `${window.location.origin}/#/subscribe-success`,
      isSubmitting: false,
    };
  },
  methods: {
    handleSubscribe() {
      this.isSubmitting = true;

      // Submit the form to FormSubmit
      const form = document.getElementById('subscribeForm');
      form.submit(); // FormSubmit will handle the redirection to the _next URL
    },
  },
};
</script>

<style scoped>
.submitButton:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
