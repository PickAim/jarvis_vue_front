<script setup lang="ts">

</script>

<template>
  <div class="settings-panel-section-wrapper personal-info">
    <div class="user-picture-and-name">
      <div class="user-picture"/>
      <div class="user-name">Денис Денисов</div>
    </div>
    <div class="registration-date">Дата регистрации: 12.31.2312</div>
    <div class="phone-number">Номер телефона: +7 (912) 312 83 12</div>
  </div>
</template>

<style scoped lang="scss">
.settings-panel-section-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;

  .user-picture-and-name {
    display: flex;
    flex-direction: column;
    align-items: center;

    .user-picture {
      width: 120px;
      height: 120px;
      border: 2px solid white;
    }

    .user-name {
      margin-top: 10px;
      font-size: 24px;
      font-weight: 700;
    }
  }

  .registration-date {
    margin-top: 60px;
    font-size: 18px;
    font-weight: 300;
  }

  .phone-number {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 300;
  }
}
</style>