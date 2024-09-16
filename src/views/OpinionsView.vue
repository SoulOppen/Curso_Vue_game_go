<script setup>
import {defineProps} from 'vue';
const props= defineProps({
    id:{
        type:Number,
        required:true
    }
})
</script>
<template>
    <p>{{props.id}}</p>
</template>