import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePersistenceStore = defineStore('persistence', () => {
    const userName = ref('John Doe')
    
    const getUserName = computed(() => userName.value)
    
    function setUserName(name) {
        userName.value = name
    }

    return {
        userName,
        getUserName,
        setUserName
    }
}, {
    persist: true
})