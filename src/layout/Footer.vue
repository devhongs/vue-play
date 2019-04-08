<template>
  <div class="footer">
    <p>Footer {{world}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;

  get world(): string {
    return this.$store.state.world;
  }

  // world() {
  //   console.log('-------------------- world')
  //   // return this.$store.state.world
  // }
}
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
