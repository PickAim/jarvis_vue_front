<template>
<RouterLink :to="{name: 'workspace', params: {name: 'Test-App'}}"> ПЕРЕХОД В РАБОЧУЮ ОБЛАСТЬ </RouterLink>
</template>

<script>
import {RouterLink, useRouter} from "vue-router";

export default {
  name: "JIntro",
  components: {
    RouterLink
  },
  setup() {
    const router = useRouter();
    let isAuthorized = false;
    if (isAuthorized) {
      router.replace({
        name: "workspace",
        params: {
          name: "Workspace"
        }
      })
    }
  }
}
</script>

<style scoped>

</style>