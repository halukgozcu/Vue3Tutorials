<template>
    <div>
        <h3>User List from JSONPlaceholder API</h3>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <table v-else class="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.website }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const users = ref([])
const loading = ref(true)
const error = ref(null)

// Mounting Phase
onBeforeMount(() => {
    console.log('Before DOM renders')
})

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Network response was not ok')
        users.value = await response.json()
    } catch (e) {
        error.value = 'Error fetching users: ' + e.message
    } finally {
        loading.value = false
    }

    console.log('DOM is ready - good for:')
    console.log('- Accessing DOM elements')
    console.log('- Fetching initial data')
    console.log('- Setting up event listeners')
})

// Updating Phase
onBeforeUpdate(() => {
    console.log('Before DOM updates')
})

onUpdated(() => {
    console.log('After DOM updates')
})

// Unmounting Phase
onBeforeUnmount(() => {
    console.log('Before component destroys')
})

onUnmounted(() => {
    console.log('Component destroyed - good for:')
    console.log('- Cleaning up timers')
    console.log('- Removing event listeners')
    console.log('- Cancelling API requests')
})
</script>

<style scoped>
.user-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.user-table th,
.user-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.user-table th {
    background-color: #f5f5f5;
    font-weight: bold;
}

.user-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.user-table tr:hover {
    background-color: #f5f5f5;
}
</style>