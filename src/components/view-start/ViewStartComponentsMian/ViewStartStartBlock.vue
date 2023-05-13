<template>
  <main>
    <ViewStartHeader />
    <div class="StartMain">
      <div class="jarvis-logo">
        <img src="src\assets\jarvis.png" alt="">
      </div>
      <div class="top-paragraf">
        <h1>
          Рекомендательный <br>сервис аналитики <br> Вашего бизнеса на Wildberries
        </h1>
        <div
          style="width: 50px; height: 50px; background-color: aquamarine;position: relative; top: -120px; left: 250px; color: black;">
          img</div>
      </div>
      <div class="about-neyrosite">
        <h1>Нейросеть, которая не только даст всю интересующую<br> аналитику, но и подскажет что делать дальше,<br>чтобы
          быстрее расти и больше зарабатывать
        </h1>
        <button class="button-try">Попробовать сейчас</button>
      </div>
    </div>
  </main>
</template>
  
<script setup lang="ts">
import ViewStartHeader from '../ViewStartHeader.vue';
</script>
  
<style scoped lang="scss">
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 45px;
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

.StartMain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

.jarvis-logo {
  margin-top: 280px;

  img {
    width: 1732px;
    height: 380px;
  }
}

.top-paragraf {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
  backdrop-filter: blur(15px);
  position: relative;
  bottom: 350px;

  h1 {
    font-weight: 700;
    font-size: 2vw;
    line-height: 80px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

.about-neyrosite {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 200px;
  gap: 45px;


  h1 {
    font-weight: 300;
    font-size: 2vw;
    line-height: 29px
  }

  .button-try {
    width: 287px;
    height: 63px;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    border: 1px solid;
    border-radius: 12px;
    margin-bottom: 62px;
    background: #B7FF44;
    color: #000000;
  }
}</style>