<template>
  <div class="welcome-view">
    <h1>Welcome to Dashboard</h1>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Users</h3>
        <p class="stat-number">1,234</p>
      </div>
      <div class="stat-card">
        <h3>Active Sessions</h3>
        <p class="stat-number">56</p>
      </div>
      <div class="stat-card">
        <h3>Total Revenue</h3>
        <p class="stat-number">$45,678</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Welcome view component
</script>

<style scoped>
.welcome-view {
  padding: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 10px;
}
</style>