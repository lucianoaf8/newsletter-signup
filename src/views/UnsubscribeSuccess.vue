<template>
    <div class="unsubscribe-success">
      <h2>{{ $t('unsubscribeSuccessTitle') }}</h2>
      <p>{{ $t('unsubscribeSuccessMessage') }}</p>
      <div id="sadFace">😢</div>
      <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UnsubscribeSuccess'
  }
  </script>