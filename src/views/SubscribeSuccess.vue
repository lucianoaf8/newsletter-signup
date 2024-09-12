<template>
  <div class="subscribe-success">
    <h2>{{ $t('subscribeSuccessTitle') }}</h2>
    <p>{{ $t('subscribeSuccessMessage') }}</p>
    <div id="fireworks"></div>
    <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'SubscribeSuccess'
}
</script>
