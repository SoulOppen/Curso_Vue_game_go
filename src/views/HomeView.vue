<script setup>
import {ref,onMounted} from 'vue';
import CardComponent from '@/components/CardComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
const listGame=ref([]);
const isLoading = ref(true);
const fetchGames = async () => {
  try {
    const key=process.env.VUE_APP_RAWG_API_KEY;
const size=12;
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}&&page_size=${size}`);
    if (!response.ok){
      throw new Error("Ok status ",response.status);
    }
    const data=await response.json();
    listGame.value =data.results;
  } catch (error) {
    console.error(error);
  }finally {
        isLoading.value = false; // Cambia el estado de carga
    }
};
onMounted(() => {
  fetchGames();
});
</script>
<template>
  <h1 class="text-center">Juegos</h1>
  <div class="container my-3 mx-auto">
    <div v-if="isLoading" class="d-flex justify-content-center">
      <SpinnerComponent/>
    </div>
  <div v-else class="grid">
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
