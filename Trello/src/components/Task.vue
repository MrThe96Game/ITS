<template>
  <div>
    <div class="card">
      <div v-if="!editabile">#{{ indice_piu_uno }} - {{ titolo }}</div>
      <div v-else>
        <input v-model="testo" @change="ok" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["conferma"],
  props: ["titolo", "indice", "editabile"],
  computed: {
    indice_piu_uno() {
      return +this.indice + 1;
    },
  },
  methods: {
    ok() {
      this.$emit("conferma",{titolo:this.testo})
    }
  },
  data: function () {
    return {
      testo: "New Task",
    };
  },
};
</script>

<style>
.card:hover {
  border: 2px solid #4079bf;
  box-shadow: 10px 10px 5px #33333320;
  cursor: pointer;
}

.card {
  box-shadow: 3px 3px 2px #33333310;
  font-size: 11px;
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 5px;
  background: #ffffff;
  height: 72px;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 8px;
}
</style>
