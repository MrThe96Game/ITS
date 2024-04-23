<template>
    <div>
        <div v-if="ifBool">IF</div>
        <div v-else>ELSE</div>
        <div v-show="showBool">SHOW</div>

        <button @click="changeBool">Change</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            showBool: true,
            ifBool: true
        }
    },
    methods: {
        changeBool: function() {
            this.showBool = !this.showBool;
            this.ifBool = !this.ifBool;
        }
    }
}
</script>