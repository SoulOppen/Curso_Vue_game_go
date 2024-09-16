<script setup>
import {computed,defineProps} from 'vue';
const props = defineProps({
    list:{
        type:Array,
        required:true
    }
})
const haveOpinion=computed(()=>{
    return props.list.length > 0;
})
</script>
<template>
    <h1>A continuación podrás ver tu opinión</h1>
    <div v-if="!haveOpinion" class="bg-success-subtle w-75 mx-auto p-3">
        No existen opiniones para mostrar.
    </div>
    <div v-else></div>
</template>
<style scoped>
    h1{
        text-align: center;
    }
</style>