<template>
  <div class="submit-request">
    <h2 class="title">{{ $t('submitRequestTitle') }}</h2>
    <form id="submitRequestForm" action="https://formsubmit.co/ae13ee8bbcd4e22acd6e07e9e275bd47" method="POST" @submit.prevent="handleSubmit" class="request-form">
      <input type="hidden" name="_subject" value="New Request Submission" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" :value="successUrl" />
      <input type="hidden" name="subject" :value="subject" />
      <input type="hidden" name="description" :value="description" />
      <input type="text" :placeholder="$t('subjectPlaceholder')" v-model="subject" required class="neon-input">
      <textarea :placeholder="$t('requestDescriptionPlaceholder')" v-model="description" required class="neon-textarea"></textarea>
      <button type="submit" class="submit-button neon-button">{{ $t('submitRequest') }}</button>
    </form>
    <router-link to="/" class="cta-button neon-cta">{{ $t('backToHome') }}</router-link>
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
      console.log('Request submitted:', this.subject, this.description);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.submit-request {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 247, 255, 0.2);
  color: #ffffff;
  font-family: 'Rajdhani', sans-serif;
}

.title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(45deg, #00f7ff, #ff00e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.request-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.neon-input, .neon-textarea {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  border-radius: 5px;
  font-size: 1rem;
  box-shadow: 0 0 5px rgba(0, 247, 255, 0.2);
  transition: all 0.3s ease;
}

.neon-input:focus, .neon-textarea:focus {
  box-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
}

.neon-textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  padding: 15px;
  background-color: transparent;
  border: 2px solid #00f7ff;
  color: #00f7ff;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #00f7ff;
  color: #0a0a2a;
  box-shadow: 0 10px 20px rgba(0, 247, 255, 0.3);
}

.cta-button {
  text-align: center;
  display: block;
  margin-top: 20px;
}

.neon-cta {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.neon-cta:hover {
  background-color: #ff00e6;
  color: #0a0a2a;
}
</style>
