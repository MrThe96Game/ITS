<template>
    <div>
        <button @click="changeClass">Change</button>
        <div :class="getClass" style="width: 80px; height: 80px;"></div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            myBool: true
        }
    },
    methods: {
        changeClass: function () {
            this.myBool = !this.myBool;
        }
    },
    computed: {
        getClass: function() {
            return this.myBool ? 'class_1' : 'class_2';
        }
    }
}
</script>

<style>
.class_1 {
    background-color: blue;
}

.class_2 {
    background-color: red;
}
</style>