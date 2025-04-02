<template>
    <div class="syntax-basics">
        <p>Ref Example : {{ count }} <button @click="increment">Increment</button></p>
        <hr />
        <p>Reactive Example : User name is {{ userInfo.name }}</p>
        <hr />
        <p> toRef example : He is {{ userInfo.age }} years old. He lives in {{ userCountry }}</p>
        <hr />
        <p> toRefs example : He is {{ age }} years old. He lives in {{ userCountry }}</p>
        <hr />
        <p> computed example : He lives in {{ userCity }}</p>
        <hr />
        <p> watch example : check console.log for when you click button <button
                @click="incrementAnotherCounter">Increment another counter {{ anotherCounter }}</button>
        </p>
    </div>
</template>

<script setup>
import { ref, reactive, toRef, toRefs, computed, watch, watchEffect } from 'vue'

const count = ref(0)
const increment = () => {
    count.value++
}

const userInfo = reactive({
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
});

const userAge = toRef(userInfo, 'age')
const userCountry = toRef(userInfo.address, 'country')

const { name, age } = toRefs(userInfo)

const userCity = computed(() => {
    return userInfo?.address?.city
})

const incrementAnotherCounter = () => {
    anotherCounter.value++
}

const anotherCounter = ref(0)

watch(anotherCounter, (newValue, oldValue) => {
    console.log(`watch example : anotherCounter changed from ${oldValue} to ${newValue}`);
})

watchEffect(() => {
    console.log(`watchEffect : anotherCounter is now: ${anotherCounter.value}`);
})

</script>

<style scoped>
.syntax-basics {
    padding: 1rem;
}

button {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
}
</style>
