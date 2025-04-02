<template>
    <div>
        <h4>This is <b>ChildB</b> component</h4>
        <p>ChildB component user name: {{ name }}</p>
        <p>ChildB component user age: {{ age }}</p>
        <div>
            The root message is <slot name="rootMessage"></slot>
        </div>
    </div>
</template>

<script setup>

import { ref, defineProps } from 'vue';

let props = defineProps({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0,
        validate: (value) => {
            return value > 0;
        }
    },
});

</script>

<style scoped></style>