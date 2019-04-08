<template>
  <div class="content">
    menu 1 page 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Menu1 extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped> 
</style>
