<template>
  <div>
    <div class="card">
      <div class="card-body" v-if="!editabile">#{{ indice_piu_uno }} - {{ titolo }}</div>
      <div class="card-body" v-else>
        <input v-model="testo" @change="ok" />
      </div>
      <button class="btn-del" @click="deleteTask">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["conferma", "delete"],
  props: ["titolo", "indice", "editabile", "id", "colonna"],
  computed: {
    indice_piu_uno() {
      return +this.indice + 1;
    },
  },
  methods: {
    ok() {
      this.$emit("conferma",{titolo:this.testo})
    },
    deleteTask() {
      this.$emit("delete", {id: this.id, colonna:this.colonna})
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
  position: relative;
}

.card-body,
.btn-del {
  display: inline-block;
}

.btn-del {
  top: 6px;
  right: 6px;
  position: absolute;
}
</style>
