<script setup lang="ts">
import {ref} from 'vue';

const isActive = ref(false)

function openText() {
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="question-wrapper">
    <h1>
      <slot name="header">Здесь будет вопрос</slot>
    </h1>
    <div class="arrow-link">
      <button class="button-link" @click="openText"/>
    </div>
  </div>
  <div class="description" :class="{ active: isActive }">
    <h1>
      <slot name="description">Здесь будет ответ на вопрос</slot>
    </h1>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

.question-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #B7FF44;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 30px;

  h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
    text-align: start;
  }

  .arrow-link {
    .button-link {
      background: url("/src/assets/images/Arrow-64px.png") no-repeat top;
      background-size: contain;
      width: 40px;
      height: 40px;
    }
  }
}

.description {
  display: none;
  padding: 20px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #FFFFFF;
  text-align: start;

  &.active {
    display: flex;
  }
}

@media (max-width: $tag-width) {
  .question-wrapper {
    h1 {
      font-weight: 400;
      font-size: 12px;
      line-height: 14.63px;
      text-align: start;
    }

    .arrow-link {
      .button-link {
        img {
          width: 35px;
          height: 20px;
        }
      }
    }
  }
  .description {
    display: none;
    padding: 20px;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 16px;
    line-height: 29px;
    color: #FFFFFF;
    text-align: start;

    &.active {
      display: flex;
    }
  }
}</style>
