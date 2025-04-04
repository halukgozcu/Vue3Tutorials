<template>
    <div class="layout">
        <header class="header">
            <h1>Vue 3 Tutorial</h1>
        </header>
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
    min-height: 100vh;
}

.header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem;
    text-align: center;
}

.main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
}
</style>