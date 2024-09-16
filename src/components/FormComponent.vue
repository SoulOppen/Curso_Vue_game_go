<script setup>
import {defineProps} from 'vue';
const props=defineProps({
    name:{
        type:String,
        required:true
    }
})
</script>
<template>
    <h1>Escribe tu opinión de: {{ props.name }}</h1>
    <form class="w-75 mx-auto">
        <div class="my-3">
            <label for="name" class="form-label">Nombre:</label>
            <input class="form-control" id="name" placeholder="Nombre">
        </div>
        <div class="my-3">
            <label for="opinion" class="form-label">Opinión:</label>
            <textarea class="form-control" id="opinion" placeholder="Opina"></textarea>
        </div>
        <button type="submit">Agregar</button>
    </form>
</template>
<style scoped>
    h1{
        text-align: center;
    }
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