<script setup>
import {ref,computed,defineProps,onMounted} from 'vue';
import FormComponent from '@/components/FormComponent.vue'
import CollapseComponent from '@/components/CollapseComponent.vue'
const props= defineProps({
    id:{
        type:Number,
        required:true
    }
})
const game=ref({});
const opinionsList=ref([]);
const addList=(e)=>{
    opinionsList.value.push(e);
    console.log(opinionsList)
}
const haveOpinion=computed(()=>{
    return opinionsList.value.length > 0;
})
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
    <h2 class="text-center">Escribe tu opinión de: {{ game.name }}</h2>
    <FormComponent :name="game.name" @create-opinion="addList"/>
    <h2 class="text-center">A continuación podrás ver tu opinión</h2>
    <div v-if="!haveOpinion" class="bg-success-subtle w-75 mx-auto p-3">
        No existen opiniones para mostrar.
    </div>
    <div v-else>
        <CollapseComponent v-for="item in opinionsList" :key="item"/>
    </div>
</template>