<script setup>
import {ref,computed,defineProps,onMounted, reactive} from 'vue';
import FormComponent from '@/components/FormComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import CollapseComponent from '@/components/CollapseComponent.vue'
const props= defineProps({
    id:{
        type:String,
        required:true
    }
})
const game=reactive({});
const name=ref('');
const text=ref('');
const opinionsList=reactive([]);
const indexOpinion=ref(null);
const isLoading = ref(true);
const addList=(e)=>{
    if (e.name.trim()+e.text.trim()!=='' && opinionsList.findIndex((item)=>item.name===e.name&&item.text===e.text)==-1){
    if (indexOpinion.value!==null) {
        opinionsList.splice(indexOpinion.value,0,e)
        indexOpinion.value=null;
    }else{
        opinionsList.push(e);
    }
}}
const deleteGame=(e)=>{
    const index=opinionsList.findIndex((item)=>item.name===e.name&&item.text===e.text);
    opinionsList.splice(index,1);
}
const editGame=(e)=>{
    const index=opinionsList.findIndex((item)=>item.name===e.name&&item.text===e.text);
    opinionsList.splice(index,1);
    indexOpinion.value=index;
    name.value=e.name;
    text.value=e.text;
}
const textButton=computed(()=>{
    return indexOpinion.value!==null? 'Actualizar':'Agregar';
})
const haveOpinion=computed(()=>{
    return opinionsList.length > 0;
})
const gameFetch= async ()=>{
    try{
    const key=process.env.VUE_APP_RAWG_API_KEY;
    const response = await fetch(`https://api.rawg.io/api/games/${props.id}?key=${key}`);
    if(!response.ok){
        throw new Error('Juego no encontrado')
    }
    const data = await response.json();
    Object.assign(game, data);
    }
    catch(e){
        console.log(e)
    }finally {
        isLoading.value = false; // Cambia el estado de carga
    }
}
onMounted(()=>
    gameFetch()
    )
</script>
<template>
    <div v-if="isLoading" class="d-flex justify-content-center">
        <SpinnerComponent/>
    </div>
    <div v-else>
    <h2 class="text-center">Escribe tu opinión de: {{ game.name }}</h2>
    <FormComponent :name="name" :text="text" :textButton="textButton" @createOpinion="addList"/>
    <h2 class="text-center">A continuación podrás ver tu opinión</h2>
    <div v-if="!haveOpinion" class="bg-success-subtle w-75 mx-auto p-3">
        No existen opiniones para mostrar.
    </div>
    <div v-else>
        <CollapseComponent
        v-for="item in opinionsList"
        :key="`${item.name}-${item.text}`"
        :name="item.name"
        :text="item.text"
        @delete="deleteGame"
        @edit="editGame"/>
    </div>
</div>
</template>
<style scoped>
.spinner-size{
    height: 5rem;
    width: 5rem;
}
</style>