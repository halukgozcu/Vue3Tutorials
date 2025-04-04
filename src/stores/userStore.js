import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const isAuthenticated = ref(false)
    const user = ref(null)
    const error = ref(null)

    const getUser = computed(() => user.value)
    const getError = computed(() => error.value)
    const getIsAuthenticated = computed(() => isAuthenticated.value)

    function login(username, password) {
        if (username === 'admin' && password === '1234') {
            user.value = { username, role: 'admin' }
            isAuthenticated.value = true
            error.value = null
            return true
        }
        error.value = 'Invalid credentials'
        return false
    }

    function logout() {
        user.value = null
        isAuthenticated.value = false
        error.value = null
    }

    return {
        user,
        error,
        isAuthenticated,
        getUser,
        getError,
        getIsAuthenticated,
        login,
        logout
    }
}, {
    persist: true
})