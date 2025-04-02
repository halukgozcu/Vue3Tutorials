<template>
    <div class="app">
        <h1 class="title">Vue Tutorials</h1>
        <div class="accordion">
            <div class="accordion-item">
                <button class="accordion-header" @click="toggleFirstComponent">
                    First Vue Component
                    <span class="icon">{{ isFirstComponentOpen ? '−' : '+' }}</span>
                </button>
                <div class="accordion-content" v-show="isFirstComponentOpen">
                    <first-vue-component />
                </div>
            </div>

            <div class="accordion-item">
                <button class="accordion-header" @click="toggleSyntaxBasics">
                    Syntax & Reactivity Basics
                    <span class="icon">{{ isSyntaxBasicsOpen ? '−' : '+' }}</span>
                </button>
                <div class="accordion-content" v-show="isSyntaxBasicsOpen">
                    <syntax-and-reactivity-basics />
                </div>
            </div>

            <div class="accordion-item">
                <button class="accordion-header" @click="toggleDirectives">
                    Directives & Built-in Features
                    <span class="icon">{{ isDirectivesOpen ? '−' : '+' }}</span>
                </button>
                <div class="accordion-content" v-show="isDirectivesOpen">
                    <directives-and-built-in-features />
                </div>
            </div>

            <div class="accordion-item">
                <button class="accordion-header" @click="toggleLifecycleHooks">
                    Vue Lifecycle Hooks
                    <span class="icon">{{ isLifecycleHooksOpen ? '−' : '+' }}</span>
                </button>
                <div class="accordion-content" v-show="isLifecycleHooksOpen">
                    <vue-lifecycle-hooks />
                </div>
            </div>

            <div class="accordion-item">
                <button class="accordion-header" @click="toggleComponentsProps">
                    Components & Props
                    <span class="icon">{{ isComponentsPropsOpen ? '−' : '+' }}</span>
                </button>
                <div class="accordion-content" v-show="isComponentsPropsOpen">
                    <components-and-props />
                </div>
            </div>

            <div class="accordion-item">
                <button class="accordion-header" @click="toggleStoreManagement">
                    Store Management
                    <span class="icon">{{ isStoreManagementOpen ? '−' : '+' }}</span>
                </button>
                <div class="accordion-content" v-show="isStoreManagementOpen">
                    <store-management />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import FirstVueComponent from './components/FirstVueComponent.vue'
import SyntaxAndReactivityBasics from './components/SyntaxAndReactivityBasics.vue'
import DirectivesAndBuiltInFeatures from './components/DirectivesAndBuiltInFeatures.vue'
import VueLifecycleHooks from './components/VueLifecycleHooks.vue'
import ComponentsAndProps from './components/ComponentsAndProps.vue'
import StoreManagement from './components/StoreManagement.vue'

const isFirstComponentOpen = ref(false)
const isSyntaxBasicsOpen = ref(false)
const isDirectivesOpen = ref(false)
const isLifecycleHooksOpen = ref(false)
const isComponentsPropsOpen = ref(false)
const isStoreManagementOpen = ref(false)

const toggleFirstComponent = () => isFirstComponentOpen.value = !isFirstComponentOpen.value
const toggleSyntaxBasics = () => isSyntaxBasicsOpen.value = !isSyntaxBasicsOpen.value
const toggleDirectives = () => isDirectivesOpen.value = !isDirectivesOpen.value
const toggleLifecycleHooks = () => isLifecycleHooksOpen.value = !isLifecycleHooksOpen.value
const toggleComponentsProps = () => isComponentsPropsOpen.value = !isComponentsPropsOpen.value
const toggleStoreManagement = () => isStoreManagementOpen.value = !isStoreManagementOpen.value
</script>

<style>
.app {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.accordion {
    margin-top: 2rem;
}

.accordion-item {
    border: 1px solid #ddd;
    margin-bottom: 0.5rem;
    border-radius: 4px;
}

.accordion-header {
    width: 100%;
    padding: 1rem;
    background: #f5f5f5;
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.accordion-content {
    padding: 1rem;
    border-top: 1px solid #ddd;
}

.icon {
    font-weight: bold;
}

.title {
    text-align: center;
    margin-bottom: 2rem;
    color: #2c3e50;
}
</style>
