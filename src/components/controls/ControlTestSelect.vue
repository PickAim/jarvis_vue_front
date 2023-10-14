<script setup lang="ts">
import 'vue-select/dist/vue-select.css';
import VSelect from 'vue-select';
</script>

<template>
  <div class="select">
    <v-select class="vue-select" :searchable="false" :options="[1,2,3,4,56]" :inputmode="false"/>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.vue-select {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  appearance: menulist-button;
  color: white;
  outline: 0;
  border: 0 !important;
  --vs-controls-color: white;
  --vs-controls-size: 1.2;
  --vs-font-size: 30px;
  background: var.$dark-gradient-color;
  backdrop-filter: blur(15px);
  border-radius: 10px;
  --vs-border-radius: 10px;
  //--vs-;
  //--vs-dropdown-bg: var.$dark-gradient-color;

  --vs-selected-color: white;

  .vs__dropdown-toggle {
    backdrop-filter: blur(15px);
  }
}
</style>