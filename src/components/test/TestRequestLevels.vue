<script setup lang="ts">
import {useRequestStore} from "@/stores/requestStore";
import {reactive} from "vue";
import {SimpleUnitEconomyRequester} from "@/requests/requesters/SavableCalculateRequester";

const requester = new SimpleUnitEconomyRequester();
const requestState = useRequestStore();
const results = reactive([]);

requestState.setLevel(1);
requester.loadAll().then((res) => results[0] = res);
requestState.setLevel(1);
requester.loadAll().then((res) => results[1] = res);

requestState.setLevel(2);
requester.loadAll().then((res) => results[2] = res);
requestState.setLevel(3);
requester.loadAll().then((res) => results[3] = res);

requestState.setLevel(4);
requester.loadAll().then((res) => results[4] = res);
requestState.setLevel(5);
requester.loadAll().then((res) => results[5] = res);
requestState.setLevel(6);
requester.loadAll().then((res) => results[6] = res);
requestState.setLevel(4);
requester.loadAll().then((res) => results[4] = res);
</script>

<template>
  <div class="request-tests">
    <h1>Basic request conflict</h1>
    <div class="requests-grid">
      <div class="request-label">Request level 1</div>
      <div class="request-result">{{ results[0] }}</div>
      <div class="request-label">Request level 1</div>
      <div class="request-result">{{ results[1] }}</div>
    </div>
    <h1>No conflict level requests</h1>
    <div class="requests-grid">
      <div class="request-label">Request level 2</div>
      <div class="request-result">{{ results[2] }}</div>
      <div class="request-label">Request level 3</div>
      <div class="request-result">{{ results[3] }}</div>
    </div>
    <h1>Conflict with high level request</h1>
    <div class="requests-grid">
      <div class="request-label">Request level 4</div>
      <div class="request-result">{{ results[4] }}</div>
      <div class="request-label">Request level 5</div>
      <div class="request-result">{{ results[5] }}</div>
      <div class="request-label">Request level 6</div>
      <div class="request-result">{{ results[6] }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.request-tests {
  display: flex;
  flex-direction: column;
  width: 600px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .requests-grid {
    display: grid;
    width: 100%;
    row-gap: 5px;
    grid-template-columns: 150px 1fr;

    .request-label {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .request-result {
      border: 1px solid gray;
      border-radius: 10px;
      padding: 5px;
    }
  }
}
</style>