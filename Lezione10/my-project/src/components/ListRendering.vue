<template>
    <div>
        <button @click="addElement">Add element</button>
        <div v-for="element in myArray">{{ element.key }}: {{ element.label }}</div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            myArray: [
                {
                    key: 'my-key-1',
                    label: 'my-label-1',
                },
                {
                    key: 'my-key-2',
                    label: 'my-label-2',
                },
                {
                    key: 'my-key-3',
                    label: 'my-label-3',
                },
            ]
        }
    },
    methods: {
        addElement: function() {
            const length = this.myArray.length + 1;
            this.myArray.push(
                {
                    key: `my-key-${length}`,
                    label: `my-label-${length}`
                }
            )
        }
    }
}
</script>

<style>
</style>