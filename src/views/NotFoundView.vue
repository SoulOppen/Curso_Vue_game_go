<script setup>
import router from '@/router'
import { ref } from 'vue'
const timer = ref(5)
const interval = setInterval(() => {
  if (timer.value <= 1) {
    clearInterval(interval)
    router.push('/')
  }
  timer.value--
}, 1000)
</script>
<template>
  <div>
    <h1>Page not found</h1>
    <h2>{{ timer }}</h2>
    <router-link to="/" class="link">Ir a Home</router-link>
  </div>
</template>
<style scoped>
h1,h2{
    text-align: center;
}
.link{
    display: block;
    width: fit-content;
    margin: auto;
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>