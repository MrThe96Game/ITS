<template>
  <RowWord :word="myArray"/>
</template>

<script>
import RowWord from "./RowWord.vue";

export default {
  components: {
    RowWord
  },
  data: function() {
    return {
      myArray: []
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      this.myArray.push(e.key.toString())
    })
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
