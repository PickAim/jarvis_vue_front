<script setup lang="ts">

</script>

<template>
  <div class="trusted-block-wrapper">
    <div class="trust-wrapper">
      <div class="paragraph-about-trust">
        <h1>ПОЧЕМУ НАМ ДОВЕРЯЮТ?</h1>
      </div>
      <div class="line-block">
        <div class="advantages">
          <div class="advantages-image">
            <img src="src\assets\images\Trusted-1.png" alt="">
          </div>
          <div class="advantages-image">
            <img src="src\assets\images\Trusted-2.png" alt="">
          </div>
          <div class="advantages-image">
            <img src="src\assets\images\Trusted-3.png" alt="">
          </div>
        </div>
        <div class="advantages-description">
          <div class="advantages-text">Актуальность и точность предоставляемых данных</div>
          <div class="advantages-text">3 года работы
            с маркетплейсами
          </div>
          <div class="advantages-text">100+ клиентов выведено
            на маркетплейсы
          </div>
        </div>
      </div>
      <button class="button-try">Попробовать сейчас</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

.trusted-block-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  margin: 50px 0;

  .trust-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 100%;
    max-width: 1200px;
    padding: 0 40px;

    .paragraph-about-trust {
      display: flex;
      flex-direction: column;

      h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
      }
    }

    .line-block {
      display: grid;
      margin: 100px 0;
      padding: 0 50px;

      .advantages {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        border-bottom: 1px solid #B7FF44;

        .advantages-image {
          display: flex;
          flex-direction: column;

          img {
            width: 290px;
            height: 290px;
          }
        }
      }

      .advantages-description {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        .advantages-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 40px;
          font-weight: 500;
          font-size: 20px;
          line-height: 29px;
        }
      }
    }
  }

  .button-try {
    border: 1px solid #B7FF44;
    border-radius: 12px;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    padding: 15px;
  }
}

@media (max-width: $tag-width) {
  .trusted-block-wrapper {
    margin: 0;

    .trust-wrapper {
      margin: 0;

      .paragraph-about-trust {
        display: flex;
        flex-direction: column;

        h1 {
          font-weight: 700;
          font-size: 48px;
          line-height: 59px;
        }
      }

      .line-block {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 50px 0 0 0;

        .advantages {
          display: flex;
          flex-direction: column;
          border: none;

          .advantages-image {
            img {
              width: 155px;
              height: 155px;
            }
          }
        }

        .advantages-description {
          display: grid;
          grid-template-columns: 1fr;
          padding-left: 20px;
          border-left: 1px solid #B7FF44;

          .advantages-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 50px;
            font-weight: 700;
            font-size: 13px;
            line-height: 16px;
            text-align: center;
          }
        }
      }
    }

    .button-try {
      display: none;
    }
  }
}</style>
