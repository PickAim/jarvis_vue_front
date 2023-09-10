<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footer-wrapper">
      <img src="\src\assets\images\jarvis.png" alt="">
      <a href="">Контакты</a>
      <a href="">Мы в социальных сетях:</a>
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

@media (max-width:$tag-width) {
  footer {
    .footer-wrapper {
      img {
        width: 150px;
        height: 35px;
      }

      a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
      }
    }
  }
}
</style>
