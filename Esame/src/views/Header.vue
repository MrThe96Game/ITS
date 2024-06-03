<template>
    <div class="header">
        <div class="header-title" @click="goHome">Esame Frontend</div>
        <input class="header-search" placeholder="Search in tasks..." v-model="searchValue"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    },
    watch: {
        searchValue(newVal) {
            this.$store.commit('setSearchValue', newVal);
        }
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.header {
    background-color: rgb(37, 144, 194);
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 100%;
    padding: 10px 20px;
}

.header-title {
    color: white;
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
}

.header-search {
    width: 600px;
    border-radius: 4px;
    font-style: italic;
    padding: 6px 8px;
}

.header-search:hover {
    cursor: pointer;
}
</style>