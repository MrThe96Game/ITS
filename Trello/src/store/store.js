import { createStore } from 'vuex'
import data from '../assets/data.json';

export default createStore({
  state: {
    searchValue: '',
    selectedDashboardIndex: 0,
    data: data
  },
  getters: {
    getDashboards: (state) => {
      return state.data;
    },
    getColumns: (state) => {
      return state.data[state.selectedDashboardIndex].columns;
    },
    getSelectedDashboard: (state) => {
      return state.data[state.selectedDashboardIndex];
    },
    getSearchValue: (state) => {
      return state.searchValue;
    }
  },
  mutations: {
    setSearchValue: (state, payload) => {
      state.searchValue = payload;
    },
    selectDashboard: (state, payload) => {
      state.selectedDashboardIndex = payload;
    },
    deleteTask: (state, payload) => {
      const { columnIndex , taskIndex } = payload;
      state.data[state.selectedDashboardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
    },
    addTask: (state, columnIndex) => {
      const currentIds = state.data[state.selectedDashboardIndex].columns[columnIndex].tasks.map(task => task.id);
      const newId = Math.max(currentIds) + 1;
      const newTask = {
        id: newId,
        title: 'New Task',
        description: '',
      }

      state.data[state.selectedDashboardIndex].columns[columnIndex].tasks.unshift(newTask)
    },
    updateTask: (state, payload) => {
      const { columnIndex , taskIndex, ...newValues } = payload;
      state.data[state.selectedDashboardIndex].columns[columnIndex].tasks[taskIndex] = newValues;
    }
  }
})
