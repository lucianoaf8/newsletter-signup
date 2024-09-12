<template>
    <div class="home">
      <h1 id="title">{{ $t('title') }}</h1>
      <div id="content">
        <p>{{ $t('description') }}</p>
        <NewsletterSections />
        <div class="cta-buttons">
            <router-link to="/subscribe" class="cta-button cta-subscribe">{{ $t('subscribeNow') }}</router-link>
            <router-link to="/unsubscribe" class="cta-button cta-unsubscribe">{{ $t('unsubscribe') }}</router-link>
            <router-link to="/edit-preferences" class="cta-button cta-edit-preferences">{{ $t('editPreferences') }}</router-link>
            <router-link to="/submit-error" class="cta-button cta-submit-error">{{ $t('submitError') }}</router-link>
            <router-link to="/submit-request" class="cta-button cta-submit-request">{{ $t('submitRequest') }}</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NewsletterSections from '../components/NewsletterSections.vue'
  
  export default {
    name: 'Home',
    components: {
      NewsletterSections
    }
  }
  </script>