<script setup lang="ts">
</script>

<template>
  <div class="view-cards-block">
    <div class="cards-wrapper">
      <div class="what-you-have">
        <h1>ЧТО ВЫ <br> СЕЙЧАС ИМЕЕТЕ:</h1>
        <img src="src\assets\Cards-block-LineUnderText.png" alt="">
      </div>
      <div class="opportunity-cards">
        <div class="first-cards">
          <h1>Сложно выбрать подходящий <br> момент чтобы встать в акцию, <br> запустить рекламу или <br>
            запланировать поставку</h1>
          <div class="card-items">
            <div class="card-items-line">
              <img src="src\assets\Cards-Block-Lil-Arrow.png" alt="">
            </div>
            <div class="card-items-img">
              <img src="src\assets\Cards-block-1.png" alt="">
            </div>
          </div>
        </div>
        <div class="bottom-cards">
          <div class="block-with-sign">
            <h1>Рутинная работа отнимает <br> много времени, которое можно <br> посвятить запуску новых товаров
              <br> и масштабированию бизнеса
            </h1>
            <div class="card-items">
              <div class="card-items-line">
                <img src="src\assets\Cards-Block-Lil-Arrow.png" alt="">
              </div>
              <div class="card-items-img">
                <img src="src\assets\Cards-block-2.png" alt="">
              </div>
            </div>
          </div>
          <div class="block-with-sign-right">
            <h1>Процесс работы с финансовыми <br>отчетами слишком трудоемкий</h1>
            <div class="card-items">
              <div class="card-items-line">
                <img src="src\assets\Cards-Block-Black-Lil-Line.png" alt="">
              </div>
              <div class="card-items-img">
                <img src="src\assets\Cards-block-3.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

.view-cards-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  background-color: white;

  h1 {
    @font-face {
      font-family: Inter;
      src: url(src\assets\Inter-SemiBold.otf);
    }
  }

  p {
    @font-face {
      font-family: Montserrat;
      src: url(src\assets\Montserrat-LightItalic.ttf);
    }
  }
}

.cards-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px 20px;
}

.what-you-have {
  display: flex;
  flex-direction: column;
  gap: 50px;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
  }
}

.opportunity-cards {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
}

.first-cards {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 21px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(25, 25, 25, 1);

  h1 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    margin: 45px 14px 20px 14px;
  }

  .card-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .card-items-line {
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin: 0px 14px 40px 14px;
    }

    .card-items-img {
      height: 214px;
      width: 214px;
    }
  }
}

.bottom-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;

  .block-with-sign {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(112, 38, 235, 1);
    border-radius: 25px;

    h1 {
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      margin: 54px 14px;
    }

    .card-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .card-items-line {
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin: 0px 14px 40px 14px;
      }

      .card-items-img {
        img {
          height: 214px;
          width: 214px;
        }
      }
    }
  }

  .block-with-sign-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(183, 255, 68, 1);
    border-radius: 25px;

    h1 {
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      margin: 54px 14px;
    }

    .card-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .card-items-line {
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin: 0px 14px 40px 14px;
      }

      .card-items-img {
        img {
          height: 214px;
          width: 214px;
        }
      }
    }
  }
}


@media (max-width: $tag-width) {
  .view-cards-block {
    padding: 20px 0px;
  }

  .cards-wrapper {
    display: flex;
    flex-direction: column;
  }

  .what-you-have {
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 59px;
      text-align: center;
    }

    img {
      width: 0px;
      height: 0px;
    }
  }

  .opportunity-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
  }

  .first-cards {
    h1 {
      font-weight: 700;
      font-size: 9px;
      line-height: 11px;
      margin: 25px 15px;
    }

    .card-items {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      .card-items-line {
        display: none;
      }

      .card-items-img {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        img {
          width: 117px;
          height: 117px;
        }
      }
    }
  }

  .bottom-cards {
    .block-with-sign {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: rgba(0, 0, 0, 1);
      border-radius: 25px;

      h1 {
        font-weight: 700;
        font-size: 9px;
        line-height: 11px;
        margin: 25px 15px;
      }

      .card-items {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        .card-items-line {
          display: none;
        }

        .card-items-img {

          img {
            margin: 0px;
            height: 117px;
            width: 117px;
          }
        }
      }
    }

    .block-with-sign-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: rgba(0, 0, 0, 1);
      border-radius: 25px;

      h1 {
        font-weight: 700;
        font-size: 9px;
        line-height: 11px;
        margin: 25px 15px;
      }

      .card-items {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        .card-items-line {
          display: none;
        }

        .card-items-img {

          img {
            margin: 0px;
            height: 117px;
            width: 117px;
          }
        }
      }
    }
  }
}</style>
