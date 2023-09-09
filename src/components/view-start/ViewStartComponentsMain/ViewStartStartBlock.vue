<template>
  <div class="view-start-block">
    <div class="start-main">
      <div class="jarvis-logo">
        <img src="src\assets\jarvis.png" alt="">
      </div>
      <div class="top-paragraph">
        <h1>
          Рекомендательный <br>сервис аналитики <br> Вашего бизнеса на Wildberries
        </h1>
      </div>
      <div class="about-network">
        <h1>Нейросеть, которая не только даст всю интересующую<br> аналитику, но и подскажет что делать дальше,<br>чтобы
          быстрее расти и больше зарабатывать
        </h1>
        <button class="button-try">Попробовать сейчас</button>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped lang="scss">
$tag-width: 1150px;

.view-start-block {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #191919;
  color: #FFFFFF;

  .start-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 46vw;
    width: 100%;

    .jarvis-logo {
      display: flex;
      justify-content: center;
      width: 100%;
      position: absolute;

      img {
        width: 90%;

      }
    }

    .top-paragraph {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 18vw;
      width: 70%;
      background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
      backdrop-filter: blur(15px);
      position: absolute;

      h1 {
        font-weight: 600;
        font-size: 3vw;
        line-height: 1.3em;
        text-align: center;
      }
    }

    .about-network {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      position: absolute;
      bottom: 30px;

      h1 {
        font-weight: 200;
        font-size: 25px;
        line-height: 1em;
      }

      .button-try {
        font-weight: 700;
        font-size: 1vw;
        line-height: 28px;
        border: 1px solid;
        border-radius: 12px;
        background: #B7FF44;
        color: #000000;
        padding: 1vw;
      }
    }
  }
}


@media (max-width: $tag-width) {
  .view-start-block {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    background-color: #191919;
    color: #FFFFFF;
    margin-top: 130px;

    .start-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      width: 100%;
      position: relative;

      .jarvis-logo {
        display: flex;
        justify-content: center;
        width: 100%;
        position: relative;

        img {
          width: 80%;
          height: 85%;
        }
      }

      .top-paragraph {
        background: none;
        backdrop-filter: none;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background:none;
        backdrop-filter: none;
        padding: 10vh;

        h1 {
          text-align: start;
          font-weight: 700;
          font-size: 3vw;
          line-height: 3vw;
          color: #FFFFFF;
        }
      }

      .about-network {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        align-items: flex-start;
        //padding: 10vh;
        gap: 0;

        h1 {
          text-align: start;
          font-weight: 300;
          font-size: 3vw;
          line-height: 2.5vw;
          color: #FFFFFF;
          padding-bottom: 10vw;
        }

        .button-try {
          position: relative;
          padding: 2vh 4vw;
          font-weight: 700;
          font-size: 3vw;
          line-height: 2vh;
          color: #000000;
        }
      }
    }
  }
}
</style>