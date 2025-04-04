<template>
    <div class="router-implementation">
        <div class="navigation-buttons">
            <button @click="router.push('/dashboard')" class="nav-button">
                Go to Dashboard Welcome Page
            </button>

            <button @click="router.push('/dashboard/reports')" class="nav-button">
                Go to Dashboard Report Page
                <span class="lock-icon">
                    {{ userStore.isAuthenticated ? '🔓' : '🔒' }}
                </span>
            </button>

            <button v-if="!userStore.isAuthenticated" @click="router.push('/login')" class="nav-button login">
                Login
            </button>

            <button v-else @click="handleLogout" class="nav-button logout">
                Logout
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const handleLogout = () => {
  userStore.logout()
  router.push('/')
}
</script>

<style scoped>
.router-implementation {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.navigation-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

.nav-button {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #34495e;
}

.login {
  background-color: #4CAF50;
}

.login:hover {
  background-color: #45a049;
}

.logout {
  background-color: #f44336;
}

.logout:hover {
  background-color: #d32f2f;
}

.lock-icon {
  font-size: 18px;
}
</style>