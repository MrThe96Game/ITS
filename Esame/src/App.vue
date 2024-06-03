<template>
  <header class="app-header">
    <Header />
  </header>
  <div id="trello">
    <div class="sider">
      <Sider />
    </div>
    <div class="dashboard">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Sider from './views/Sider.vue';

export default {
  components: {
    Header,
    Sider
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#trello {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
}

.app-header {
  width: 100%;
  height: 60px;
}

.sider {
  width: 160px;
}

.dashboard {
  width: calc(100vw - 160px);
  flex-grow: 1;
}
</style>
