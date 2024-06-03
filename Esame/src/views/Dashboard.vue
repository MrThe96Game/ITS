<template>
    <div class="container">
        <div class="image-container">
            <div @click="goHome" class="goBack">
                <img src="../assets/back.png">
            </div>
            <h2>{{ dashboardTitle }}</h2>
        </div>
        <div class="description">{{ dashboardDescription }}</div>
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
    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
    computed: {
        columns() {
            return this.$store.getters.getColumns;
        },
        dashboardTitle() {
            return this.$store.getters.getSelectedDashboard.dashboard;
        },
        dashboardDescription() {
            return this.$store.getters.getSelectedDashboard.description;
        }
    }
}
</script>

<style scoped>
.container {
    padding: 0px 8px 16px 8px;
}

.description {
    margin-bottom: 16px;
}

.image-container {
    align-items: center;
    display: flex;
    justify-content: center;
}

.image-container > div {
    width: 30px;
    height: 30px;
    padding: 4px;
    align-items: center;
}

.image-container > h2,
.goBack {
    display: inline-block;
}

.goBack > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
    transition: opacity 0.2s ease;
    cursor: pointer;
}

.column-container {
    display: flex;
    flex-grow: 1;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>