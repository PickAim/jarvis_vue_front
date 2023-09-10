<script setup lang="ts">
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
</script>

<template>
  <MiddleLineLayout>
    <div class="view-you-have">
      <div class="what-you-have-label view-you-have-block">
        <img class="not-visible-image" src="src\assets\images\Cards-block-LineUnderText.png" alt="">
        <h1>ЧТО ВЫ <br> СЕЙЧАС ИМЕЕТЕ:</h1>
        <img src="src\assets\images\Cards-block-LineUnderText.png" alt="">
      </div>
      <div class="opportunity-cards view-you-have-block">
        <div class="opportunity-card first-card">
          <h1>Сложно выбрать подходящий момент чтобы встать в акцию, запустить рекламу или
            запланировать поставку</h1>
          <div class="card-icons">
            <img class="line-icon" src="src\assets\images\Cards-Block-Lil-Arrow.png" alt="">
            <img class="card-icon" src="src\assets\images\Cards-block-1.png" alt="">
          </div>
        </div>
        <div class="opportunity-card second-card">
          <h1>Рутинная работа отнимает много времени, которое можно посвятить запуску новых товаров
            и масштабированию бизнеса
          </h1>
          <div class="card-icons">
            <img class="line-icon" src="src\assets\images\Cards-Block-Lil-Arrow.png" alt="">
            <img class="card-icon" src="src\assets\images\Cards-block-2.png" alt="">
          </div>
        </div>
        <div class="opportunity-card third-card">
          <h1>Процесс работы с финансовыми отчетами слишком трудоемкий</h1>
          <div class="card-icons">
            <img class="line-icon" src="src\assets\images\Cards-Block-Black-Lil-Arrow.png" alt="">
            <img class="card-icon" src="src\assets\images\Cards-block-3.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </MiddleLineLayout>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/variables' as var;

$tag-width: 0px;

.middle-layout {
  background: #fff;
}

.view-you-have {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-block: 40px;

  h1 {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
  }

  .what-you-have-label {
    display: flex;
    flex-direction: column;
    flex: 4 0;

    h1 {
      font-size: 48px;
    }

    img {
      width: 70%;
    }

    .not-visible-image {
      visibility: hidden;
    }
  }

  .opportunity-cards {
    display: flex;
    flex-direction: row;
    flex: 5 0;
    flex-wrap: wrap;
    column-gap: 43px;
    row-gap: 22px;

    .opportunity-card {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      flex: 1 0;
      padding: 45px 10px 20px 10px;
      border-radius: 25px;

      h1 {
        font-size: 15px;
        line-height: normal;
        padding-bottom: 60px
      }

      .card-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-right: 20px;
        height: 80px;

        .card-icon {
          height: 100%;
        }

        .line-icon {
          width: 50px;
          height: auto;
        }
      }

      &.first-card {
        min-width: 100%;
        background: #191919;
        color: white;

        h1 {
          width: calc(50% - 45px);
        }

        .card-icons {
          height: 100px;
        }
      }

      &.second-card {
        background: var.$blue-jarvis-color;
        color: white;
      }

      &.third-card {
        background: var.$green-jarvis-color;
        color: black;
      }
    }
  }
}

//
//.view-you-have {
//  display: flex;
//  flex-direction: column;
//  justify-content: center;
//  background-color: white;
//
//  h1 {
//    font-family: Inter, sans-serif;
//  }
//
//  p {
//    font-family: Montserrat, sans-serif;
//  }
//}
//
//.cards-wrapper {
//  display: flex;
//  justify-content: space-around;
//  align-items: center;
//  flex-wrap: wrap;
//  margin: 0px 20px;
//}
//
//.what-you-have {
//  display: flex;
//  flex-direction: column;
//  gap: 50px;
//
//  h1 {
//    font-weight: 700;
//    font-size: 48px;
//    line-height: 59px;
//  }
//}
//
//.opportunity-cards {
//  display: flex;
//  flex-direction: column;
//  justify-content: space-around;
//  gap: 10px;
//}
//
//.first-cards {
//  display: flex;
//  flex-direction: column;
//  justify-content: space-between;
//  border-radius: 21px;
//  color: rgba(255, 255, 255, 1);
//  background-color: rgba(25, 25, 25, 1);
//
//  h1 {
//    font-weight: 700;
//    font-size: 1rem;
//    line-height: 1rem;
//    margin: 45px 14px 20px 14px;
//  }
//
//  .card-items {
//    display: flex;
//    flex-direction: row;
//    justify-content: space-between;
//
//    .card-items-line {
//      display: flex;
//      flex-direction: column;
//      justify-content: end;
//      margin: 0px 14px 40px 14px;
//    }
//
//    .card-items-img {
//      height: 214px;
//      width: 214px;
//    }
//  }
//}
//
//.bottom-cards {
//  display: flex;
//  flex-direction: row;
//  justify-content: space-around;
//  gap: 10px;
//
//  .block-with-sign {
//    display: flex;
//    flex-direction: column;
//    justify-content: space-between;
//    color: rgba(255, 255, 255, 1);
//    background-color: rgba(112, 38, 235, 1);
//    border-radius: 25px;
//
//    h1 {
//      font-weight: 700;
//      font-size: 15px;
//      line-height: 18px;
//      margin: 54px 14px;
//    }
//
//    .card-items {
//      display: flex;
//      flex-direction: row;
//      justify-content: space-between;
//
//      .card-items-line {
//        display: flex;
//        flex-direction: column;
//        justify-content: end;
//        margin: 0px 14px 40px 14px;
//      }
//
//      .card-items-img {
//        img {
//          height: 214px;
//          width: 214px;
//        }
//      }
//    }
//  }
//
//  .block-with-sign-right {
//    display: flex;
//    flex-direction: column;
//    justify-content: space-between;
//    color: rgba(0, 0, 0, 1);
//    background-color: rgba(183, 255, 68, 1);
//    border-radius: 25px;
//
//    h1 {
//      font-weight: 700;
//      font-size: 15px;
//      line-height: 18px;
//      margin: 54px 14px;
//    }
//
//    .card-items {
//      display: flex;
//      flex-direction: row;
//      justify-content: space-between;
//
//      .card-items-line {
//        display: flex;
//        flex-direction: column;
//        justify-content: end;
//        margin: 0px 14px 40px 14px;
//      }
//
//      .card-items-img {
//        img {
//          height: 214px;
//          width: 214px;
//        }
//      }
//    }
//  }
//}
//
//
//@media (max-width: $tag-width) {
//  .view-you-have {
//    padding: 20px 0px;
//  }
//
//  .cards-wrapper {
//    display: flex;
//    flex-direction: column;
//  }
//
//  .what-you-have {
//    h1 {
//      font-weight: 700;
//      font-size: 24px;
//      line-height: 59px;
//      text-align: center;
//    }
//
//    img {
//      width: 0px;
//      height: 0px;
//    }
//  }
//
//  .opportunity-cards {
//    display: flex;
//    flex-direction: column;
//    justify-content: space-around;
//    gap: 10px;
//  }
//
//  .first-cards {
//    h1 {
//      font-weight: 700;
//      font-size: 9px;
//      line-height: 11px;
//      margin: 25px 15px;
//    }
//
//    .card-items {
//      display: flex;
//      flex-direction: row;
//      justify-content: flex-end;
//
//      .card-items-line {
//        display: none;
//      }
//
//      .card-items-img {
//        display: flex;
//        flex-direction: column;
//        align-items: flex-end;
//        justify-content: flex-end;
//
//        img {
//          width: 117px;
//          height: 117px;
//        }
//      }
//    }
//  }
//
//  .bottom-cards {
//    .block-with-sign {
//      display: flex;
//      flex-direction: column;
//      justify-content: space-between;
//      color: rgba(0, 0, 0, 1);
//      border-radius: 25px;
//
//      h1 {
//        font-weight: 700;
//        font-size: 9px;
//        line-height: 11px;
//        margin: 25px 15px;
//      }
//
//      .card-items {
//        display: flex;
//        flex-direction: column;
//        align-items: flex-end;
//        justify-content: flex-end;
//
//        .card-items-line {
//          display: none;
//        }
//
//        .card-items-img {
//
//          img {
//            margin: 0px;
//            height: 117px;
//            width: 117px;
//          }
//        }
//      }
//    }
//
//    .block-with-sign-right {
//      display: flex;
//      flex-direction: column;
//      justify-content: space-between;
//      color: rgba(0, 0, 0, 1);
//      border-radius: 25px;
//
//      h1 {
//        font-weight: 700;
//        font-size: 9px;
//        line-height: 11px;
//        margin: 25px 15px;
//      }
//
//      .card-items {
//        display: flex;
//        flex-direction: column;
//        align-items: flex-end;
//        justify-content: flex-end;
//
//        .card-items-line {
//          display: none;
//        }
//
//        .card-items-img {
//
//          img {
//            margin: 0px;
//            height: 117px;
//            width: 117px;
//          }
//        }
//      }
//    }
//  }
//}
</style>
