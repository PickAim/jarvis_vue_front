<template>
  <div>{{name}}</div>
  <RouterLink :to="{name: 'storages'}">НА КАРТУ СО СКЛАДАМИ</RouterLink>
  <br>
  <RouterLink :to="{name: 'unit'}">НА РАСЧЁТ UNIT ЭКОНОМИКИ</RouterLink>
  <RouterView></RouterView>
</template>

<script>
import {RouterLink, RouterView} from "vue-router";

export default {
  name: "JWorkspace",
  props: ['name'],
  components:{
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>

</style>