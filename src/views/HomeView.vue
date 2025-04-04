<template>
    <div class="home-view">
        <div class="accordion">
            <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
                <button class="accordion-header" @click="toggleAccordion(index)">
                    {{ item.title }}
                    <span class="icon">{{ item.isOpen ? '−' : '+' }}</span>
                </button>
                <div class="accordion-content" :class="{ active: item.isOpen }" v-show="item.isOpen">
                    <component :is="item.component" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import FirstVueComponent from '../components/FirstVueComponent.vue'
import SyntaxAndReactivityBasics from '../components/SyntaxAndReactivityBasics.vue'
import DirectivesAndBuiltInFeatures from '../components/DirectivesAndBuiltInFeatures.vue'
import VueLifecycleHooks from '../components/VueLifecycleHooks.vue'
import ComponentsAndProps from '../components/ComponentsAndProps.vue'
import StoreManagement from '../components/StoreManagement.vue'
import VueRouterImplementation from '../components/VueRouterImplementation.vue'

const accordionItems = ref([
    { title: 'First Vue Component', component: FirstVueComponent, isOpen: false },
    { title: 'Syntax & Reactivity Basics', component: SyntaxAndReactivityBasics, isOpen: false },
    { title: 'Directives & Built-in Features', component: DirectivesAndBuiltInFeatures, isOpen: false },
    { title: 'Vue Lifecycle Hooks', component: VueLifecycleHooks, isOpen: false },
    { title: 'Components & Props', component: ComponentsAndProps, isOpen: false },
    { title: 'Store Management', component: StoreManagement, isOpen: false },
    { title: 'Vue Router Implementation', component: VueRouterImplementation, isOpen: false }
])

const toggleAccordion = (index) => {
    accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen
}
</script>

<style scoped>
.home-view {
    padding: 20px;
}

.accordion {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.accordion-item {
    border: 1px solid #ddd;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    background: white;
}

.accordion-header {
    width: 100%;
    padding: 1rem;
    background: #f8f9fa;
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
}

.accordion-content {
    padding: 1rem;
    border-top: 1px solid #ddd;
}

.accordion-content.active {
    animation: fadeIn 0.3s ease-in-out;
}

.icon {
    font-weight: bold;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>