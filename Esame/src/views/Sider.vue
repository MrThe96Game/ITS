<template>
    <div class="container">
        <div class="item" v-for="(item, index) in dashboards" @click="selectDashboard(index)">
            {{ item.dashboard }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        dashboards() {
            return this.$store.getters.getDashboards;
        }
    },
    methods: {
        selectDashboard(dashboardIndex) {
            this.$store.commit('selectDashboard', dashboardIndex);
            this.$router.push(`/dashboard?id=${dashboardIndex}`)
        }
    }
}
</script>

<style scoped>
.container {
    height: 100%;
    overflow-y: auto;
    padding: 12px 0px;
    border-right: 1px solid black;
    background-color: rgb(236, 236, 236);
}

.item {
    margin-bottom: 4px;
    padding: 6px 8px;
    font-size: 18px;
    border-radius: 4px;
}

.item:hover {
    cursor: pointer;
    background-color: white;
}
</style>