<script setup>
import {ref,defineProps,defineEmits,watch,onMounted} from 'vue';

const props=defineProps({
    name:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    textButton:{
        type:String,
        required:true
    }
})
const nameInput=ref('');
const textInput=ref('');
const emit=defineEmits(['createOpinion']);
watch(() => props.name, (newName) => {
    nameInput.value = newName;
});
watch(() => props.text, (newText) => {
    textInput.value = newText;
});
const setInitialValues = () => {
    nameInput.value = props.name;
    textInput.value = props.text;
};
onMounted(() => {
    setInitialValues();
});
const add=()=>{
    emit('createOpinion',{name:nameInput.value,text:textInput.value})
    nameInput.value='';
    textInput.value='';
}
</script>
<template>

    <form class="w-75 mx-auto">
        <div class="my-3">
            <label for="name" class="form-label">Nombre:</label>
            <input class="form-control" id="name" placeholder="Nombre" v-model="nameInput">
        </div>
        <div class="my-3">
            <label for="opinion" class="form-label">Opinión:</label>
            <textarea class="form-control" id="opinion" placeholder="Opina" v-model="textInput"></textarea>
        </div>
        <button type="submit" @click.prevent="add">{{props.textButton}}</button>
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