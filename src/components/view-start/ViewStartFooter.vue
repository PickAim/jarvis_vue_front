<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footer-wrapper">
      <div class="jarvis-label"/>
      <a href="">Контакты</a>
      <a href="">Мы в социальных сетях:</a>
      <div class="fasie-block">
        <div class="fasie-logo"/>
        <span class="fasie-text">
          Проект выполнен при поддержке «Фонда содействия инновациям» в рамках
          федерального проекта «Платформа университетского технологического предпринимательства»
        </span>
      </div>
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
    width: 100%;

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

  .fasie-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;


    .fasie-logo {
      flex: 0 0 auto;
      background: url("/src/assets/images/head_logo_fasie.png") no-repeat left;
      background-size: contain;
      height: 100px;
      width: 200px;
    }

    .fasie-text {
      width: 700px;
    }
  }
}

@media (max-width: $tag-width) {
  footer {
    .footer-wrapper {
      a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
      }

      .fasie-text {
        font-size: 12px;
      }
    }
  }
}
</style>
