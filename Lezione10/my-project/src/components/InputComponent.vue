<template>
    <div>
        <input @input="updateText" :value="myInputText" type="text" />
        <button @click="changeText">change</button>

        <br>

        <input v-model="myInputTextVModel" type="text" />
        <button @click="changeTextVModel">change</button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            myInputText: '',
            myInputTextVModel: ''
        }
    },
    methods: {
        updateText: function(event) {
            this.myInputText = event.target.value;
        },
        changeText: function() {
            this.myInputText = 'Input from code';
        },
        changeTextVModel: function() {
            this.myInputTextVModel = 'Input from code v-model';
        }
    }
}
</script>