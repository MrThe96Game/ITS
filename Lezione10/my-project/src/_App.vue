<template>
  <div>
    <h2>Ripasso</h2>

    <div>Basic Components</div>
    <BasicComponents />
    <br>

    <div>Computed</div>
    <Computed />
    <br>

    <div>List Rendering</div>
    <ListRendering />
    <br>

    <div>Input Component</div>
    <InputComponent />
    <br>

    <div>Props</div>
    <PropsAndEvent 
      :myText="propsAndEventText" 
      @myEvent="onMyEvent"
    />
    <br>

    <div>ConditionalRendering</div>
    <ConditionalRendering />
    <br>

    <div>
      <ParentOne />
      <br>
      <ParentTwo />
    </div>
  </div>
</template>

<script>
import BasicComponents from './components/BasicComponents.vue';
import Computed from './components/Computed.vue';
import ListRendering from './components/ListRendering.vue';
import InputComponent from './components/InputComponent.vue';
import PropsAndEvent from './components/PropsAndEvent.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import ParentOne from './components/Example/ParentOne.vue';
import ParentTwo from './components/Example/ParentTwo.vue';

export default {
  components: {
    BasicComponents,
    Computed,
    ListRendering,
    InputComponent,
    PropsAndEvent,
    ConditionalRendering,
    ParentOne,
    ParentTwo
  },
  data: function() {
    return {
      propsAndEventText: 'props and event'
    }
  },
  methods: {
    onMyEvent: function() {
      this.propsAndEventText = 'this is event'
    }
  }
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
