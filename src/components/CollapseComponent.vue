<script setup>
import {defineProps,defineEmits} from 'vue';
const props=defineProps({
  name:{
    type:String,
    required:true
  },
  text:{
    type:String,
    required:true
  }
})
const emits=defineEmits(['delete'])
const borrar=()=>{
  emits('delete',{name:props.name,text:props.text})
}
</script>
<template>
  <div class="d-block w-75 mx-auto my-3">
  <button  type="button" data-bs-toggle="collapse" :data-bs-target="`#${props.name}`" aria-expanded="false" :aria-controls="`collapse${props.name}`" class="w-100 border-0 bg-primary-subtle text-start">
    {{ props.name }}
  </button>

<div class="collapse border" :id="props.name">
  <div class="border-bottom">
    {{ props.text }}
  </div>
  <div>
    <button class="btn btn-warning mx-2">Editar</button>
    <button class="btn btn-danger mx-2" @click="borrar">Eliminar</button>
  </div>
</div>
</div>
</template>