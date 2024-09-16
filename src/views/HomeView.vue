<script setup>
import {ref,onMounted} from 'vue';
import CardComponent from '@/components/CardComponent.vue';
const key='c47bd30d1c374425beac32be53f48520';
const size=12;
const listGame=ref([]);
const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}&&page_size=${size}`);
    if (!response.ok){
      throw new Error("Ok status ",response.status);
    }
    const data=await response.json();
    console.log(data.results[0])
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
  <div class="container my-3 mx-auto">
  <div class="grid">
    <CardComponent v-for="item in listGame" :key="item.id" :obj="item"/>
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
