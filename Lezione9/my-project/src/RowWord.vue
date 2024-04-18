<template>
    <div class="container">
        <div class="sub-el" v-for="index in 5">
            {{ word[index - 1] }}
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'word' ]
}
</script>

<style>
.container {
    display: flex;
}

.sub-el {
    width: 30px;
    height: 30px;
    border: 2px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
}
</style>