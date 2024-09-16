<script setup>
import {ref} from 'vue';
import CardComponent from '@/components/CardComponent.vue';

const listGame=ref(["hola","kl","l","3","0"]);
</script>

<template>
  <div class="container my-3 mx-auto">
  <div class="grid">
    <CardComponent v-for="(item,index) in listGame" :key="index" :src="item.src"/>
  </div>
</div>
</template>
<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:5%;
}
</style>
