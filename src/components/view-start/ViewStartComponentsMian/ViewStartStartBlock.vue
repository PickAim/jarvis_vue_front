<template>
    <main>
        <div class="start-block">
            <div class="text-block-all">
                <div class="text-block">
                    <h1>
                    Рекомендательный <br>сервис аналитики <br> Вашего бизнеса на Wildberries
                    </h1>
                    <p style=" ">
                    Нейросеть, которая не только даст всю интересующую<br> аналитику, но и подскажет что делать дальше,<br>чтобы быстрее расти и больше зарабатывать
                    </p>
                </div>
                <button class="button-try">Попробовать сейчас</button>
            </div>
            <div class="robot">
                <img src="src\assets\business-3d-happy-robot-assistant-waving-hello 1.png" alt="">
            </div>
        </div>
    </main>
</template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped lang="scss">
  main{
    width: 100%;
    color: #EEEFF3;
    background-color: #EEEFF3;
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    flex: 0 0 auto;
  }
  main h1{
    @font-face {
          font-family:Inter;
          src: url(src\assets\Inter-SemiBold.otf);
        }
  }
  main p{
    @font-face {
      font-family:Montserrat ;
      src: url(src\assets\Montserrat-LightItalic.ttf);
    }
  }
  //block with robot
  .start-block{
    display: flex;
    flex-direction: row;
    background: url(src/assets/Rectangl.png);
    margin-top: -1px;
    }
  .text-block-all{
    margin-left: 80px;
    margin-top: 52px;
  }
  .text-block{
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .text-block h1{
    font-weight: 700; 
    font-size: 48px; 
    line-height: 58px; 
    color: #FFFFFF; 
    width: 741px; 
    height: 174px;
  }
  .text-block p {
    font-weight: 300; 
    font-size: 24px; 
    line-height: 29px; 
    width: 679px; 
    height: 87px;
  }
  .button-try{
    width: 287px;
    height: 63px;
    background: linear-gradient(180deg, #3129F1 0%, rgba(33, 38, 162, 0.35) 100%);
    box-shadow: 0px 10px 13px 5px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    margin-left: 0px;
    margin-top: 48px;
  }
  .robot img{
    position: relative;
    width: 411px;
    height: 543px;
    margin-top: 45px;
    margin-bottom: 33.5px;
    margin-right: 28px;
    z-index: 1;
  }
  </style>