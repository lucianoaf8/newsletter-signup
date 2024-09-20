<template>
  <div class="unsubscribe">
    <h2>{{ $t('unsubscribeTitle') }}</h2>
    <form id="unsubscribeForm" action="https://formsubmit.co/ae13ee8bbcd4e22acd6e07e9e275bd47" method="POST" @submit.prevent="handleUnsubscribe">
      <input type="email" id="unsubscribeEmail" name="email" required :placeholder="$t('unsubscribePlaceholder')" v-model="email" />
      <input type="hidden" name="_subject" value="New Unsubscribe Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <!-- Keep _next for FormSubmit redirection -->
      <input type="hidden" name="_next" :value="successUrl" />
      <button type="submit" class="submit-button submit-unsubscribe" :disabled="isSubmitting">
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
      // Correct the success URL to include the hash for Vue Router hash mode
      successUrl: `${window.location.origin}/#/unsubscribe-success`,
      isSubmitting: false,
    };
  },
  methods: {
    handleUnsubscribe() {
      this.isSubmitting = true;

      // Submit the form to FormSubmit
      const form = document.getElementById('unsubscribeForm');
      form.submit(); // FormSubmit will handle the redirection to the _next URL
    },
  },
};
</script>
