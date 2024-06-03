<template>
    <div class="task">
        <div class="task-header">
            <div v-show="!isEditable" class="title">{{ getTaskTitle }}</div>
            <input v-show="isEditable" v-model="newTitle" />
            <div class="task-header-buttons">
                <div v-show="!isEditable" @click="deleteTask">
                    <img src="../assets/delete.png" />
                </div>
                <div v-show="!isEditable" @click="editTask">
                    <img src="../assets/edit.png" />
                </div>
                <div v-show="isEditable" @click="reset">
                    <img src="../assets/cancel.png" />
                </div>
                <div v-show="isEditable" @click="saveTask">
                    <img src="../assets/save.png" />
                </div>
            </div>
        </div>
        <div class="description-container">
            <div v-show="!isEditable" class="description">{{ getTaskDescription }}</div>
            <textarea v-show="isEditable" v-model="newDescription" rows="8" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        },
        taskIndex: {
            type: Number,
            required: true,
        }
    },
    emits: ['deleteTask', 'updateTask'],
    data() {
        return {
            editable: false,
            newTitle: '',
            newDescription: '',
        }
    },
    computed: {
        isEditable() {
            return this.editable;
        },
        getTaskTitle() {
            if(!this.task)
                return '';

            return this.task.title;
        },
        getTaskDescription() {
            if(!this.task || !this.task.description)
                return 'No description available';

            return this.task.description;
        }
    },
    methods: {
        deleteTask() {
            this.$emit('deleteTask', this.taskIndex);
        },
        editTask() {
            this.editable = true;
            this.newTitle = this.task.title;
            this.newDescription = this.task.description;
        },
        saveTask() {
            const payload = {
                ...this.task,
                title: this.newTitle,
                description: this.newDescription
            }

            this.reset();

            this.$emit('updateTask', payload)
        },
        reset() {
            this.editable = false;
            this.newTitle = '';
            this.newDescription = '';
        }
    }
}
</script>

<style scoped>
.task {
    width: 93%;
    min-height: 40px;
    max-height: 250px;
    background-color: white;
    margin: auto;
    margin-bottom: 12px;
    border-radius: 4px;
    border: 1px solid black;
}

.task .task-header {
    width: 100%;
    border-bottom: 0.5px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task .task-header > input {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    margin: 4px 6px;
}

.task:hover .task-header .task-header-buttons > div > img {
    opacity: 1;
}

.task .task-header-buttons {
    display: flex;
}

.task .task-header-buttons > div {
    width: 30px;
    height: 30px;
    padding: 4px;
}

.task .task-header-buttons > div > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.task .task-header-buttons > div > img:hover {
    cursor: pointer;
    background-color: rgb(236, 236, 236);
}

.task .title {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    padding: 12px 8px;
}

.task .description-container {
    max-height: 200px;
    overflow-y: auto;
    padding: 6px 8px;
    margin: auto;
}

.task .description-container > textarea {
    width: 100%;
    height: 180px;
    resize: none;
    overflow-y: auto;
}

.task .description {
    font-size: 14px;
}
</style>