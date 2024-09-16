<script setup>
import {ref,defineProps,onMounted} from 'vue';
import FormComponent from '@/components/FormComponent.vue'
import OpinionsComponent from '@/components/OpinionsComponent.vue'
const props= defineProps({
    id:{
        type:Number,
        required:true
    }
})
const game=ref({});
const opinionsList=ref([]);
const addList=(e)=>{
    opinionsList.value=[...opinionsList.value,e]
}
const gameFetch= async ()=>{
    try{
    const key=process.env.VUE_APP_RAWG_API_KEY;
    const response = await fetch(`https://api.rawg.io/api/games/${props.id}?key=${key}`);
    if(!response.ok){
        throw new Error('Juego no encontrado')
    }
    const data = await response.json();
    game.value=data;
    }
    catch(e){
        console.log(e)
    }
}
onMounted(()=>
    gameFetch()
)
</script>
<template>
    <FormComponent :name="game.name" @create-opinion="addList"/>
    <OpinionsComponent :list="opinionsList"/>
</template>