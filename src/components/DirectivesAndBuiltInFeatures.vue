<template>
    <div>
        <p>Conditional Rendering v-if, v-else, v-else-if</p>
        <p>
            Male : <input type="radio" v-model="gender" value='M' /> <br />
            Female : <input type="radio" v-model='gender' value='F' /> <br />
            No Gender : <input type="radio" v-model='gender' value='N' />
        </p>
        <p v-if='selectedGender === "M"'>Gender is Male</p>
        <p v-else-if='selectedGender === "F"'>Gender is Female</p>
        <p v-else>Gender is N/A</p>
        <p v-show='selectedGender === "N"'>Please select a gender !</p>
        <hr />
        <p> List Rendering v-for</p>
        <p>Object rendering</p>
        <p v-for="(userDetail, key) in user"> Key : {{ key }},Value : {{ userDetail }}</p>
        <p>Array rendering</p>
        <p v-for="(product, index) in productList">{{ index }} : {{ product }}</p>
        <hr />
        <p>Raw Html Rendering v-html</p>
        <p v-html="staticHtmlMessage"></p>
        <hr />
        <p v-once>Drawing only once v-once {{ counterComputed }}</p>
        <p>Increment Counter 1 by 1 <button @click="incrementCounter"> Counter : {{ counterComputed }}</button></p>
        <hr />
        <p>v-bind example (One way binding)</p>
        <p>
            <button @click="incrementAnotherCounter"> Increment by 2 : {{ anotherCounter }}</button><br />
            v-bind aims to help us to bind value only one-way. it doesn't work like v-model. That's why it doesn't
            effect 'anotherCounter' value when you change this input. : <input :value="anotherCounter" />.
            Because it bound once. This is a one way binding. <br />
            For example, we can use v-bind to bind image url. <br />
            <img :src="imageUrl" alt="Vue.js Funny" />
        </p>
        <hr />
        <p>v-model example (Two way bindings)</p>
        <p>
            This <input type="text" v-model="name" /> input and <input type="text" v-model="name" /> are using same
            v-model. When you change
            one of them, the other one will be changed too. This is a two way binding.
            <br />
            v-model implementation can be used for objects as well. Category : <input type="text"
                v-model="categoryDetail.category" /> and this category name is {{ categoryDetail.category }}. <br />

        </p>
        <hr />
        <p>v-on example (binding events)</p>
        <div class="event-examples">
            <button v-on:click="incrementCounter">Click Event with v-on:click</button><br />
            <button @click="incrementCounter">Click Event with @click (shorthand)</button><br />
            <input v-on:input="(event) => name = event.target.value" :value="name" /> Using v-on:input<br />
            <input @input="(event) => name = event.target.value" :value="name" /> Using @input (shorthand)<br />

            <div @mouseover="anotherCounter++" @mouseout="anotherCounter--">
                Hover over this div to increment counter, move away to decrement: {{ anotherCounter }}
            </div><br />

            <input @keyup.enter="incrementCounter" placeholder="Press enter to increment counter" />
            Key modifiers with @keyup.enter<br />

            <div class="event-example" @click="handleOuterClick">
                Outer div (Click me!)
                <div class="inner-event" @click.stop="handleInnerClick">
                    Inner div with @click.stop (Click won't propagate to parent)
                </div>
            </div>

            <form @submit.prevent="handleSubmit" class="form-example">
                <input type="text" placeholder="Type something..." />
                <button type="submit">Submit (won't reload page)</button>
            </form>
        </div>
    </div>
</template>

<script setup>

import { computed, ref, reactive } from 'vue'

const gender = ref('M')

const selectedGender = computed(() => {
    return gender.value;
})

const user = reactive({
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
})

const productList = ref(["Coffee", "Tea", "Milk", "Juice"])

const staticHtmlMessage = '<span>Test Static Message</span>'

const counter = ref(0)
const incrementCounter = () => {
    counter.value += 1;
}
const counterComputed = computed(() => {
    return counter.value
})

const imageUrl = 'https://preview.redd.it/pwti7eg8sed81.jpg?auto=webp&s=bf147f354c2507cc653d4704fe63ed82dabd8965';

const anotherCounter = ref(2)

const incrementAnotherCounter = () => {
    anotherCounter.value += 2;
}

const name = ref('John Doe')

const categoryDetail = reactive({
    category: 'Electronics',
    subCategory: 'Mobile Phones',
    brand: 'Apple'
})

const handleOuterClick = () => {
    alert('Outer div clicked!')
}

const handleInnerClick = () => {
    alert('Inner div clicked!')
}

const handleSubmit = () => {
    alert('Form submitted without page reload!')
}

</script>

<style scoped>
.event-example {
    padding: 20px;
    background-color: #f0f0f0;
    margin: 10px 0;
    cursor: pointer;
}

.inner-event {
    padding: 10px;
    background-color: #e0e0e0;
    margin: 10px;
}

.form-example {
    margin: 10px 0;
    padding: 10px;
    background-color: #f8f8f8;
}

.form-example input {
    margin-right: 10px;
}
</style>