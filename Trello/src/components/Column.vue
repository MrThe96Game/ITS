<template>
    <div class="card">
        <div class="card-header">
            <div class="title">{{ getColumnTitle }}</div>
            <div class="card-header-buttons">
                <div @click="addTask">
                    <img src="../assets/add.png" />
                </div>
            </div>
        </div>
        <Task :task=task :taskIndex=index v-for="(task, index) in getTasks" @deleteTask="deleteTask" @updateTask="updateTask($event, index)"/>
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    components: {
        Task
    },
    props: {
        column: {
            type: Object,
            required: true
        },
        columnIndex: {
            type: Number,
            required: true
        }
    },
    computed: {
        searchValue() {
            return this.$store.getters.getSearchValue;
        },
        getColumnTitle() {
            if(!this.column)
                return '';

            return this.column.name;
        },
        getTasks() {
            if(!this.column)
                return [];

            return this.column.tasks.filter(task => {
                if(this.searchValue == '')
                    return true;

                return task.title.toLowerCase().includes(this.searchValue.toLowerCase());
            });
        }
    },
    methods: {
        deleteTask(taskIndex) {
            const payload = {
                columnIndex: this.columnIndex,
                taskIndex: taskIndex
            }

            this.$store.commit('deleteTask', payload)
        },
        addTask() {
            this.$store.commit('addTask', this.columnIndex)
        },
        updateTask(payload, taskIndex) {
            const newPayload = {
                ...payload,
                columnIndex: this.columnIndex,
                taskIndex: taskIndex
            }

            this.$store.commit('updateTask', newPayload)
        }
    }
}
</script>

<style scoped>
.card {
    background-color: rgb(37, 144, 194);
    min-width: 350px;
    max-width: 450px;
    height: calc(100vh - 160px);
    flex: 1 1 300px;
    min-height: 350px;
    border-radius: 4px;
    overflow-y: auto;
}

.card:hover .card-header .card-header-buttons > div > img {
    opacity: 1;
}

.card .card-header {
    width: 100%;
}

.card .card-header .card-header-buttons > div {
    width: 30px;
    height: 30px;
    padding: 4px;
}

.card .card-header .card-header-buttons > div > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;
}

.card .card-header .card-header-buttons > div > img:hover {
    background-color: rgb(236, 236, 236);
}

.card .card-header {
    color: rgb(37, 144, 194);
    background-color: white;
    padding: 4px 8px;
    margin: 8px 12px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
}
</style>