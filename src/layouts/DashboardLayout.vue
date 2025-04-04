<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <router-link to="/dashboard">Welcome</router-link>
        <router-link to="/dashboard/reports">Reports</router-link>
      </nav>
    </aside>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// Dashboard layout component
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 20px;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar a {
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

.sidebar a:hover,
.sidebar a.router-link-active {
  background-color: #34495e;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
}
</style>