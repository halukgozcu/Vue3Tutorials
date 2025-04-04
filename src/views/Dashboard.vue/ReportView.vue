<template>
    <div class="report-view">
        <h1>Reports</h1>
        <div class="report-table">
            <table>
                <thead>
                    <tr>
                        <th>Report ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="report in reports" :key="report.id">
                        <td>{{ report.id }}</td>
                        <td>{{ report.name }}</td>
                        <td>{{ report.date }}</td>
                        <td><span :class="['status', report.status]">{{ report.status }}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const reports = ref([
    { id: 1, name: 'Monthly Sales', date: '2024-01-01', status: 'completed' },
    { id: 2, name: 'User Analytics', date: '2024-01-15', status: 'pending' },
    { id: 3, name: 'Revenue Report', date: '2024-01-30', status: 'in-progress' },
])
</script>

<style scoped>
.report-view {
    padding: 20px;
}

.report-table {
    margin-top: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

th {
    background-color: #f8f9fa;
    font-weight: 600;
}

.status {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.875rem;
}

.completed {
    background-color: #d4edda;
    color: #155724;
}

.pending {
    background-color: #fff3cd;
    color: #856404;
}

.in-progress {
    background-color: #cce5ff;
    color: #004085;
}
</style>