<template>
    <div>{{ myText }}</div>
    <button @click="changeMyText">Change</button>
</template>

<script>
export default {
    props: {
        myText: {
            type: String,
            required: true
        }
    },
    emits: ['myEvent'],
    methods: {
        changeMyText: function () {
            this.$emit('myEvent');
        }
    }
}
</script>