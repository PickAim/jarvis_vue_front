<template>
  <component :is="isCompA ? TestA : TestB" @click="isCompA = !isCompA"/>
</template>

<script setup lang="ts">
import TestA from "@/component/test/TestA.vue";
import TestB from "@/component/test/TestB.vue";
import {ref} from "vue";

const isCompA = ref(true);
</script>

<style scoped>

</style>