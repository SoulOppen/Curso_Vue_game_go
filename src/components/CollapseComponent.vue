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
const emits=defineEmits(['delete','edit'])
const borrar=()=>{
  emits('delete',{name:props.name,text:props.text})
}
const editar=()=>{
  emits('edit',{name:props.name,text:props.text})
}
</script>
<template>
  <div class="d-block w-75 mx-auto my-3">
  <button  type="button" data-bs-toggle="collapse" :data-bs-target="`#${props.name}-${props.text}`" aria-expanded="false" :aria-controls="`collapse${props.name}`" class="w-100 border-0 bg-primary-subtle text-start text-primary p-2">
    Opinión creada por: {{ props.name }}
  </button>

<div class="collapse border" :id="`${props.name}-${props.text}`">
  <div class="border-bottom px-2">
    Opinión: {{ props.text }}
  </div>
  <div class="p-3">
    <button class="btn btn-warning mx-2" @click="editar">Editar</button>
    <button class="btn btn-danger mx-2" @click="borrar">Eliminar</button>
  </div>
</div>
</div>
</template>