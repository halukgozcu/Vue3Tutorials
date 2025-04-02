import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUnpersistenceStore = defineStore('unpersistence', () => {
    const userName = ref('Jane Doe')
    
    const getUserName = computed(() => userName.value)
    
    function setUserName(name) {
        userName.value = name
    }

    return {
        userName,
        getUserName,
        setUserName
    }
})