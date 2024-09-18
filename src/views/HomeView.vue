<script setup>
import {ref,onMounted} from 'vue';
import CardComponent from '@/components/CardComponent.vue';
const key=process.env.VUE_APP_RAWG_API_KEY;
const size=12;
const listGame=ref([]);
const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}&&page_size=${size}`);
    if (!response.ok){
      throw new Error("Ok status ",response.status);
    }
    const data=await response.json();
    listGame.value =data.results;
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => {
  fetchGames();
});
</script>

<template>
  <h1 class="text-center">Juegos</h1>
  <div class="container my-3 mx-auto">
  <div class="grid">
    <CardComponent v-for="item in listGame" :key="item.id" :obj="item" class="card__component"/>
  </div>
</div>
</template>
<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:1vh;
}
.card__component{
  display: block;
  margin:0 auto;
}
</style>
