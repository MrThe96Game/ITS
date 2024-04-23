<template>
    <div>
        <button @click="sumValue">Add</button>
        <div>{{ counter }}</div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        sumValue: function () {
            this.counter++;
        }
    }
}
</script>

<style>
</style>