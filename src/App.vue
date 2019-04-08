<template>
  <div id="app">
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './common/components/HelloWorld.vue';
import Menu from './layout/Menu.vue';
import Content from './layout/Content.vue';
import Footer from './layout/Footer.vue';

@Component({
  components: {
    HelloWorld,
    Menu,
    Content,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
