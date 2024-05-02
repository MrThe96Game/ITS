<template>
    <div class="app">
        <div class="sider">
            <div class="parent" @click="selectParent(parent)" v-for="parent in parents">
                <span>{{ parent.label }}</span>
            </div>
        </div>

        <div class="content">
            <div class="note" v-for="note in getNotes">
                <Note :myNote="note" />
            </div>
        </div>

        <button @click="addNote">Add Note</button>
    </div>
</template>

<script>
import Note from './Note.vue';

export default {
    components: {
        Note
    },
    data: function() {
        return {
            parents: [
                {
                    id: 'my-id-1',
                    label: 'my-label-1'
                },
                {
                    id: 'my-id-2',
                    label: 'my-label-2'
                },
                {
                    id: 'my-id-3',
                    label: 'my-label-3'
                }
            ],
            notes: [
                {
                    parent: 'my-id-1',
                    content: 'contenuto nota 1',
                    header: 'titolo 1'
                },
                {
                    parent: 'my-id-2',
                    content: 'contenuto nota 2',
                    header: 'titolo 2'
                },
                {
                    parent: 'my-id-2',
                    content: 'contenuto nota 3',
                    header: 'titolo 3'
                },
                {
                    parent: 'my-id-3',
                    content: 'contenuto nota 4',
                    header: 'titolo 4'
                },
                {
                    parent: 'my-id-3',
                    content: 'contenuto nota 5',
                    header: 'titolo 5'
                },
                {
                    parent: 'my-id-3',
                    content: 'contenuto nota 6',
                    header: 'titolo 6'
                },
            ],
            selectParentId: ''
        }
    },
    computed: {
        getNotes: function () {
            return this.notes.filter(el => el.parent == this.selectParentId);
        }
    },
    methods: {
        selectParent: function(parent) {
            this.selectParentId = parent.id
        },
        addNote: function() {
            const newNote = {
                header: 'new note',
                content: 'this is new note',
                parent: 'my-id-1'
            }

            this.notes.push(newNote)
        }
    }
}
</script>

<style>
body, html {
    height: 1000px;
}

.app {
    display: flex;
    height: 100%;
}

.sider {
    width: 30%;
    height: 100%;
}

.content {
    height: 100%;
    width: 70%;
}

.parent {
    font-size: 24px;
    padding: 20px;
    background: lightgray;
}

.parent:hover {
    background: lightcoral;
    cursor: pointer;
}
</style>