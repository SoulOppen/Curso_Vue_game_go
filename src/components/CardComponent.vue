<script setup>
import {ref,defineProps,computed} from 'vue';
const like=ref(false);
const props=defineProps({
  obj:{
    type:Object,
    required:true
  }
})
const likeToggle=()=>{
  like.value = !like.value
}
const likeClass=computed(()=>like.value? "bi-heart-fill":"bi-heart");
</script>
<template>
  <div class="card" style="width: 18rem;">
  <img :src="props.obj.background_image" class="card-img-top height" :alt="'img-'+props.obj.name">
  <div class="card-body w-100 p-0">
    <h5 class="card-title mx-2">{{props.obj.name}}</h5>
    <div class="border-top px-3 my-2">
      Rating:{{ props.obj.rating }}
    </div>
    <div class="border-top px-3">
      Release:{{ props.obj.released }}
    </div>
    <div class="border-top border-bottom px-3">
      Update:{{ props.obj.updated }}
    </div>
    <div class="d-flex w-25 py-2 mx-2">
      <RouterLink :to="`/opinions/${props.obj.id}`" class="btn btn-primary">Opinar</RouterLink>
      <i class="bi fs-3 text-danger mx-2" :class="likeClass" @click="likeToggle"></i>
    </div>
  </div>
</div>
</template>
<style scoped>
.height{
  height:50%;
}
</style>