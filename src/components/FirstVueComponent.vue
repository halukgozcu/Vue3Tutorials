<template>
    <h1>{{ message }}</h1>
    <button @click="increment">Count: {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('First Vue Component Example!');
const count = ref(0);

function increment() {
    count.value++;
}
</script>