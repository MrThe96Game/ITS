<template>
  <div id="container">
    <input v-model="testo_di_ricerca" @input="cerca"/>
    <div v-for="(oggettocolonna, index) in colonne" class="colonna">
      <div class="titolo-colonna">{{ oggettocolonna.name }}</div>
       <Task v-for="(task,indice_task) in oggetti_filtrati(oggettocolonna.tasks,testo_di_ricerca)" :editabile="task.editabile" :indice="indice_task" :titolo="task.titolo" @conferma="termina(index,indice_task,$event)"></Task>
      <div class="pulsante-aggiungi" @click="aggiungiCard(index)">+ Aggiungi </div>
      </div>
      
  </div>
</template>

<script>
import Task from "./components/Task.vue";

export default {
  components: { Task },
  methods:{
    oggetti_filtrati(tasks,testo_di_ricerca) {
        return tasks.filter(dato=>{
            if (testo_di_ricerca=="") return true;
            return (dato.titolo.includes(testo_di_ricerca))
        })
      
    },
    termina(indice_colonna,indice_task,event) {
        this.colonne[indice_colonna].tasks[indice_task].titolo=event.titolo;
        this.colonne[indice_colonna].tasks[indice_task].editabile=false;
    },
    aggiungiCard(indice) {
        this.colonne[indice].tasks.push({
            titolo:"Nuovo",
            editabile:true

        })
    }
  },
  data: function () {
    return {
      testo_di_ricerca:"",
      colonne: [
        {
          name: "Lunedì",
          tasks: [
            {
              titolo: "Task asd",
            },
            {
              titolo: "Task qqq",
            },
            {
              titolo: "Task",
            },
          ],
        },
        {
          name: "Martedì",
          tasks: [
            {
              titolo: "Prova",
            },
            {
              titolo: "Task",
            },
             {
              titolo: "Mai",
            }, {
              titolo: "Ciao",
            },
          ],
        },
      ],
    };
  },
  created() {},
};
</script>

<style>
.pulsante-aggiungi {
    cursor:pointer;
    
}
.pulsante-aggiungi:hover {
    color:#4079bf;
    
}
body {
  margin: 0;
}
#app {
}
.titolo-colonna {
  font-size: 12px;
  text-transform: uppercase;
}
.colonna {
  width: 272px;
  background: #f1f2f4;
  height:fit-content;
  padding: 12px;
  margin: 12px;
  border-radius: 5px;
  box-sizing: border-box;
}
#container {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  background: #4079bf;
  height: 100vh;
  width: 100vw;
}
</style>
