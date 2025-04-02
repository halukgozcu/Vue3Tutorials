<template>
    <div>
        <p>Message : <input v-model="message" placeholder="Enter message" /></p>
        <div>
            <KeepAlive>
                <component :is="parentComponent" :root-message="message" />
            </KeepAlive>
        </div>
        <br />
    </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

let message = ref('Hello Hello!');

let parentComponent = defineAsyncComponent(() =>
    import('./parent-child-components/DynamicComponentParent.vue')
);

</script>

<style scoped></style>