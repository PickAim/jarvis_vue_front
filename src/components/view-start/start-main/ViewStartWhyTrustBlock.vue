<script setup lang="ts">
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";

const actions = new ViewStartActions();
const imagesWithText =
    [
      ["/src/assets/images/Trusted-1-512px.png", "Актуальность и точность предоставляемых данных"],
      ["/src/assets/images/Trusted-2-512px.png", "3 года работы с маркетплейсами"],
      ["/src/assets/images/Trusted-3-512px.png", "100+ клиентов выведено на маркетплейсы"],
    ]
</script>

<template>
  <div class="trust-block-wrapper">
    <div class="trust-wrapper">
      <div class="paragraph-about-trust">
        <h1>ПОЧЕМУ НАМ ДОВЕРЯЮТ?</h1>
      </div>
      <div class="trust-grid">
        <template v-for="(imageWithText, ind) in imagesWithText" :key="ind">
          <div class="advantages-image-cell">
            <div class="advantages-image"
                 :class="['image-'+(ind+1)]"
                 :style="{backgroundImage: `url(${imagesWithText[0]})`}"/>
          </div>
          <div class="delimiter-cell">
            <div class="delimiter"/>
            <div class="spot"/>
          </div>
          <div class="advantages-text-cell">
            <div class="advantages-text">
              {{ imageWithText[1] }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <button class="button-try" @click="actions.onTryButtonClick()">Попробовать сейчас</button>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;
$grid-template: 1fr 250px 1fr;

.trust-block-wrapper {
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
    padding: 0 20px;

    .paragraph-about-trust {
      display: flex;
      flex-direction: column;

      h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
      }
    }

    .trust-grid {
      display: grid;
      margin: 100px 0;
      //padding: 0 50px;
      grid-template-rows: $grid-template;
      grid-auto-flow: column;
      align-items: stretch;
      justify-items: stretch;
      width: 100%;
      //row-gap: 0px;

      .advantages-image-cell {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .advantages-image {
          display: flex;
          flex-direction: column;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          justify-self: center;
          height: 120px;
          width: 160px;

          &.image-1 {
            background-image: url("/src/assets/images/Trusted-1-512px.png");
          }

          &.image-2 {
            background-image: url("/src/assets/images/Trusted-2-512px.png");
          }

          &.image-3 {
            background-image: url("/src/assets/images/Trusted-3-512px.png");
          }
        }
      }

      .delimiter-cell {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;

        .delimiter {
          background: #B7FF44;
          //width: 2px;
          height: 2px;
        }

        .spot {
          position: absolute;
          border-radius: 999px;
          background: #B7FF44;
          filter: blur(10px);
          align-self: center;
          width: 80px;
          height: 80px;
        }
      }

      .advantages-text-cell {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        .advantages-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 20px;
          line-height: normal;
          max-width: 300px;
          font-weight: 700;
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
  .trust-block-wrapper {
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

      .trust-grid {
        grid-template-rows: repeat(3, minmax(300px, 1fr));
        grid-template-columns: 1fr 50px 1fr;
        grid-auto-flow: row;


        .delimiter-cell {
          align-items: center;
          justify-content: center;

          .spot {
            width: 40px;
            height: 40px;
          }

          .delimiter {
            width: 2px;
            height: 100%;
          }
        }

        .advantages-text-cell {
          justify-content: center;

          .advantages-text {
            font-size: 17px;
          }
        }

        .advantages-image-cell {
          align-items: center;

          .advantages-image {
            height: 84px;
            width: 112px;
          }
        }
      }
    }

    .button-try {
      display: none;
    }
  }
}
</style>
