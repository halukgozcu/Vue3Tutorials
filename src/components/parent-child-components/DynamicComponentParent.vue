<template>
    <div>
        <h3>Parent Component Message {{ props.message }} </h3>
        <KeepAlive>
            <component :is='currentComponent' :name='user.name' :age='user.age'>
                <template #rootMessage>
                    {{ props.rootMessage }}
                </template>
            </component>
        </KeepAlive>
        <button
            @click="currentComponent = currentComponent === DynamicComponentChildA ? DynamicComponentChildB : DynamicComponentChildA">
            Toggle Component
        </button>
    </div>
</template>

<script setup>
import { shallowRef, reactive, defineProps } from 'vue'
import DynamicComponentChildA from './DynamicComponentChildA.vue'
import DynamicComponentChildB from './DynamicComponentChildB.vue'

const props = defineProps({
    rootMessage: {
        type: String,
        required: true
    }
})

const currentComponent = shallowRef(DynamicComponentChildA);

const user = reactive({
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
})

</script>

<style scoped></style>