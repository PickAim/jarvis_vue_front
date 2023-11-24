<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footer-wrapper">
      <div class="jarvis-label"/>
      <a href="">Контакты</a>
      <a href="">Мы в социальных сетях:</a>
      <div class="fasie-logo"/>
    </div>
  </footer>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

footer {
  width: 100%;
  background: #191919;
  color: #FFFFFF;
  display: flex;
  justify-content: flex-start;

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 45px;
    padding: 50px 40px;

    .jarvis-label {
      background: url("/src/assets/images/Jarvis-Label-256px.png") no-repeat top;
      background-size: contain;
      width: 250px;
      height: 70px;
    }

    a {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    }
  }

  .fasie-logo {
    background: url("/src/assets/images/head_logo_fasie.png") no-repeat top;
    background-size: contain;
    background-position: left;
    height: 100px;
  }
}

@media (max-width:$tag-width) {
  footer {
    .footer-wrapper {
      a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
      }
    }
  }
}
</style>
