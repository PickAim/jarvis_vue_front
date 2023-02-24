<template>
  <div class="ml-10">
    <button @click="workerViewStart.openLoginOverlay()">Оверлей логина</button>
    <button @click="workerViewStart.openRegistrationOverlay()">Оверлей регистрации</button>
  </div>
</template>

<script setup lang="ts">
import {WorkerViewStart} from "@/component-class/WorkerViewStart";

const workerViewStart = new WorkerViewStart()
</script>

<style scoped lang="scss">
  button{
    display: block;
    width: 200px;
    height: 70px;
    margin-block: 10px;
    border: 2px solid black;
    &:hover{
      border-width: 3px;
    }
    &:active{
      border-width: 2px;
    }
  }
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    transition: all 0.6s;
    clip-path: circle(0% at 105% -5%);
    &.active{
      clip-path: circle(100%);
      background: rgba(0,0,0,0.5);
    }
  }
</style>
