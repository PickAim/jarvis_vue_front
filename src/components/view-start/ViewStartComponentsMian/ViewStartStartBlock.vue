<template>
  <div class="View-Start-Block">
    <div class="Start-Main">
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
.View-Start-Block {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  border: 1px solid black;
  background-color: #191919;
  color: #FFFFFF;


  h1 {
    @font-face {
      font-family: Inter;
      src: url(src\assets\fonts\Inter-SemiBold.otf);
    }
  }

  p {
    @font-face {
      font-family: Montserrat;
      src: url(src\assets\fonts\Montserrat-LightItalic.ttf);
    }
  }
}

.Start-Main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 46vw;
  width: 100%;
}

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


  .start-block-image {
    width: 50px;
    height: 50px;
    background-color: aquamarine;
    position: relative;
    top: -120px;
    left: 110px;
    color: black;
  }

  h1 {
    font-weight: 600;
    font-size: 3vw;
    line-height: 1.5em;
    text-align: center;
  }
}

.about-network {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  position: absolute;
  bottom: 30px;
  h1 {
    font-weight: 200;
    font-size: 36px;
    line-height: 1em;
  }

  .button-try {
    width: 287px;
    height: 63px;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    border: 1px solid;
    border-radius: 12px;
    background: #B7FF44;
    color: #000000;
  }
}
</style>