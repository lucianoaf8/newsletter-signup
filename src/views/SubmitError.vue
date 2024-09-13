<template>
  <div class="submit-error">
    <h2 class="title">{{ $t('submitErrorTitle') }}</h2>
    <form id="submitErrorForm" action="https://formsubmit.co/ae13ee8bbcd4e22acd6e07e9e275bd47" enctype="multipart/form-data" method="POST" @submit.prevent="handleSubmit" class="error-form">
      <input type="hidden" name="_subject" value="New Error Submission" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" :value="successUrl" />
      <input type="email" id="subscribeEmail" name="email" required :placeholder="$t('subscribePlaceholder')" v-model="email" />
      <input type="text" name="errorSubject" :placeholder="$t('subjectPlaceholder')" required class="neon-input">
      <textarea name="errorDescription" :placeholder="$t('errorDescriptionPlaceholder')" required class="neon-textarea"></textarea>
      <input type="file" name="attachment" accept="image/*" class="neon-file-input" />
      <button type="submit" class="submit-button neon-button" :disabled="isSubmitting">
        {{ isSubmitting ? $t('submitting') : $t('submitError') }}
      </button>
    </form>
    <router-link to="/" class="cta-button neon-cta">{{ $t('backToHome') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'SubmitError',
  data() {
    return {
      email: '',
      successUrl: `${window.location.origin}/#/success-page`,
      isSubmitting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitting = true;
      const form = document.getElementById('submitErrorForm');
      form.submit();
    },
  },
};
</script>

<style scoped>
.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>

<style scoped>
.submit-error {
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
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.error-form {
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

.neon-file-input {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 247, 255, 0.2);
  transition: all 0.3s ease;
}

.neon-file-input:hover {
  box-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
}

.neon-file-input::file-selector-button {
  background-color: #00f7ff;
  border: none;
  padding: 10px;
  color: #0a0a2a;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.neon-file-input::file-selector-button:hover {
  background-color: #ff00e6;
  color: #ffffff;
}

</style>
