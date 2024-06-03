<template>
    <div class="container">
        <h2>{{ dashboardTitle }}</h2>
        <div class="column-container">
            <Column :column="column" :columnIndex=index v-for="(column, index) in columns"/>
        </div>
    </div>
</template>

<script>
import Column from '../components/Column.vue';

export default {
    components: {
        Column
    },
    computed: {
        columns() {
            return this.$store.getters.getColumns;
        },
        dashboardTitle() {
            return this.$store.getters.getSelectedDashboard.dashboard;
        }
    }
}
</script>

<style scoped>
.container {
    padding: 0px 8px 16px 8px;
}

.column-container {
    display: flex;
    flex-grow: 1;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>