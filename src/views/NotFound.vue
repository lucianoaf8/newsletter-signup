<!-- src/views/NotFound.vue -->
<template>
  <div class="not-found">
    <div class="not-found-content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="not-found-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff4757"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
      <h1 class="not-found-title">404</h1>
      <p class="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/" class="home-button">Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: #ffffff;
  text-align: center;
}

.not-found-content {
  max-width: 500px;
  animation: fadeIn 1s ease-in-out;
}

.not-found-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  animation: shake 0.5s infinite;
}

.not-found-title {
  font-size: 6rem;
  margin-bottom: 20px;
  color: #ff4757;
}

.not-found-message {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.home-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #3742fa;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}
</style>
