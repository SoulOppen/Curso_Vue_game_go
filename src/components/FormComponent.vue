<script setup>
import {ref,defineEmits} from 'vue';

const name=ref('');
const text=ref('');
const emit=defineEmits(['createOpinion']);
const add=()=>{
    emit('createOpinion',{name:name.value,text:text.value})
}
</script>
<template>

    <form class="w-75 mx-auto">
        <div class="my-3">
            <label for="name" class="form-label">Nombre:</label>
            <input class="form-control" id="name" placeholder="Nombre" v-model="name">
        </div>
        <div class="my-3">
            <label for="opinion" class="form-label">Opinión:</label>
            <textarea class="form-control" id="opinion" placeholder="Opina" v-model="text"></textarea>
        </div>
        <button type="submit" @click.prevent="add">Agregar</button>
    </form>
</template>
<style scoped>
    textarea{
        resize: none;
        height: 5rem;
        overflow-y: auto;
    }
    button{
        background-color: skyblue;
        color: black;
        padding: 0.75% 0.5%;
    }
</style>