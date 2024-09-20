<template>
  <div class="success-page">
    <div id="background">
      <div class="background-circle" v-for="(circle, index) in circles" :key="index" :style="circle.style"></div>
    </div>
    <div id="container">
      <h1 id="title">{{ $t('successTitle') }}</h1>
      <p>{{ $t('successMessage') }}</p>
      <router-link to="/" class="cta-button cta-home">{{ $t('backToHome') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessPage',
  data() {
    return {
      circles: [
        { style: { top: '10%', left: '15%', animationDuration: '25s' } },
        { style: { top: '50%', left: '70%', animationDuration: '30s' } },
        { style: { top: '80%', left: '30%', animationDuration: '20s' } },
      ],
    };
  },
};
</script>

<style scoped>
.success-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#container {
  text-align: center;
}

p {
  margin-bottom: 40px;
}
</style>