<template>
    <div class="background">
      <!-- Animated Floating Circles -->
      <div
        class="circle"
        v-for="(circle, index) in circles"
        :key="index"
        :style="circle.style"
      ></div>
  
      <div class="container">
        <h1>Success!</h1>
        <p>Your form has been submitted successfully.</p>
        <button class="button" @click="goHome">Go Back to Home</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SuccessPage',
    data() {
      return {
        circles: [
          {
            style: {
              width: '200px',
              height: '200px',
              top: '10%',
              left: '15%',
              animationDuration: '25s',
            },
          },
          {
            style: {
              width: '300px',
              height: '300px',
              top: '50%',
              left: '70%',
              animationDuration: '30s',
            },
          },
          {
            style: {
              width: '150px',
              height: '150px',
              top: '80%',
              left: '30%',
              animationDuration: '20s',
            },
          },
        ],
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Base Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Body Styling */
  .background {
    font-family: 'Rajdhani', sans-serif;
    background-color: #0a0a2a;
    color: #ffffff;
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
  
  /* Container Styling */
  .container {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 0 40px rgba(0, 247, 255, 0.2);
    padding: 60px;
    max-width: 600px;
    margin: 100px auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  
  /* Heading Styling */
  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #00f7ff, #ff00e6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  /* Paragraph Styling */
  p {
    font-size: 1rem;
    margin-bottom: 40px;
  }
  
  /* Button Styling */
  .button {
    display: inline-block;
    background-color: #00ff95;
    color: #0a0a2a;
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
  }
  
  .button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 255, 149, 0.3);
  }
  
  /* Circle Styling */
  .circle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(0, 247, 255, 0.5), rgba(255, 0, 230, 0.5));
    animation: float infinite;
    opacity: 0.5;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-50px) translateX(50px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      margin: 60px 20px;
      padding: 40px;
    }
  
    h1 {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      margin: 40px 10px;
      padding: 30px;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    p {
      font-size: 0.9rem;
    }
  
    .button {
      padding: 12px 25px;
      font-size: 0.9rem;
    }
  }
  </style>
  