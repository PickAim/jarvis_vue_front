<template>
  <footer>
    <div class="footer-wrapper">
      <img src="\src\assets\jarvis.png" alt="">
      <a href="">Контакты</a>
      <a href="">Мы в социальных сетях:</a>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
footer {
  width: 100%;
  background: #191919;
  color: #FFFFFF;
  display: flex;
  justify-content: start;

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 45px;
    padding: 50px 40px;

    img {
      width: 300px;
      height: 70px;
    }

    a {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    }
  }

}
</style>