<template>
  <div class="header">
    <a>Link 1</a>
    <a>Link 2</a>
    <a>Link 3</a>
    <button @click="addCount">add</button>
  </div>
  <div id="container">
    <div class="sider">
      <input class="sider-cerca" v-model="testo_di_ricerca" @input="cerca" placeholder="search..." />
      <div class="sider-container">
        <div class="sider-item" v-for="(dashboard, index) in dashboards" :class="selectedDashboard == index ? 'highligh' : ''" @click="selectedDashboard = index">
          {{ dashboard }}
        </div>
      </div>
    </div>
    <div class="dashboard">
      <h2>{{this.dashboards[this.selectedDashboard]}}</h2>
      <div class="cards">
        <div v-for="(oggettocolonna, index) in getColumns" class="colonna">
          <div class="titolo-colonna">{{ oggettocolonna.name }}</div>
           <Task v-for="(task,indice_task) in oggetti_filtrati(oggettocolonna.tasks,testo_di_ricerca)" :editabile="task.editabile" :indice="indice_task" :titolo="task.titolo" :colonna="oggettocolonna.name" :id="task.id" @delete="deleteTask" @conferma="termina(index,indice_task,$event)"></Task>
          <div class="pulsante-aggiungi" @click="aggiungiCard(index)">+ Aggiungi </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./components/Task.vue";

export default {
  components: { Task },
  methods:{
    addCount() {
      this.$store.commit('increment', { value: 10 });
    },
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
    },
    deleteTask({colonna, id}) {
      const colIndex = this.colonne.findIndex(el => el.name == colonna);
      const taskIndex = this.colonne[colIndex].tasks.findIndex(el => el.id == id);
      this.colonne[colIndex].tasks.splice(taskIndex, 1);
    }
  },
  computed: {
    getColumns() {
      const index = this.data.findIndex(el => el.dashboard == this.dashboards[this.selectedDashboard])
      return index != -1 ? this.data[index].colonne : [];
    }
  },
  data: function () {
    return {
      dashboards: ['Dashboard #1', 'Dashboard #2', 'Dashboard #3'],
      testo_di_ricerca:"",
      selectedDashboard: -1,
      data: [
        {
          dashboard: 'Dashboard #1',
          colonne: [
            {
              name: "Lunedì",
              tasks: [
                {
                  titolo: "Task asd",
                  id: 0
                },
                {
                  titolo: "Task qqq",
                  id: 3
                },
                {
                  titolo: "Task",
                  id: 2
                },
              ],
            },
            {
              name: "Martedì",
              tasks: [
                {
                  titolo: "Prova",
                  id: 4
                },
                {
                  titolo: "Task",
                  id: 5
                },
                 {
                  titolo: "Mai",
                  id: 6
                }, 
                {
                  titolo: "Ciao",
                  id: 7
                },
              ],
            },
          ],
        },
        {
          dashboard: 'Dashboard #2',
          colonne: [
            {
              name: "Mercoledi",
              tasks: [
                {
                  titolo: "Task asd",
                  id: 0
                },
                {
                  titolo: "Task qqq",
                  id: 3
                },
                {
                  titolo: "Task",
                  id: 2
                },
              ],
            },
            {
              name: "Giovedi",
              tasks: [
                {
                  titolo: "Prova",
                  id: 4
                },
                {
                  titolo: "Task",
                  id: 5
                },
                 {
                  titolo: "Mai",
                  id: 6
                }, 
                {
                  titolo: "Ciao",
                  id: 7
                },
              ],
            },
          ],
        },
        {
          dashboard: 'Dashboard #3',
          colonne: [
            {
              name: "Sabato",
              tasks: [
                {
                  titolo: "Task asd",
                  id: 0
                },
                {
                  titolo: "Task qqq",
                  id: 3
                },
                {
                  titolo: "Task",
                  id: 2
                },
              ],
            },
            {
              name: "Domenica",
              tasks: [
                {
                  titolo: "Prova",
                  id: 4
                },
                {
                  titolo: "Task",
                  id: 5
                },
                 {
                  titolo: "Mai",
                  id: 6
                }, 
                {
                  titolo: "Ciao",
                  id: 7
                },
              ],
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
  height: calc(100vh - 60px);
  width: 100vw;
}

.header {
  height: 60px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  padding: 0 256px;
  align-items: center;
}

.header > a {
  color: #4079bf;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
}

.header > a:hover {
  color: lightblue;
  background-color: #4079bf;
}

.sider { 
  background-color: white;
}

.sider-container {
  border-top: 1px solid gray;
  height: calc(100vh - 104px);
}

.sider-cerca {
  cursor: pointer;
  padding: 6px;
  margin: 6px;
}

.dashboard > h2 {
  margin-left: 12px;
  color: white;
}

.cards {
  display: flex;
}

.sider-item {
  margin: 6px;
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
}

.sider-item:hover {
  background-color: lightblue;
}

.highligh {
  background-color: lightblue;
}
</style>
