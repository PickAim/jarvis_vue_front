<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/workspaceLabels";
import {computed, ref} from "vue";
import type {GreenZoneResultData, NicheRequestData} from "@/types/DataTypes";
import {GreenZoneActions} from "@/requests/request-actions/calculations/GreenZoneActions";
import {ResultCode} from "@/requests/ResultCode";
import BarChart from "@/components/view-workspace/visualizers/BarChart.vue";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import {useRequestStore} from "@/stores/requestStore";
import CalculateWithCategoryComponent from "@/components/view-workspace/sections/CalculateWithCategoryComponent.vue";

const analyzeResult = ref<GreenZoneResultData | undefined>();


const chartData = computed<[number, number][]>(() => {
  const greenZoneResult = analyzeResult.value;
  if (!greenZoneResult) return [];
  return greenZoneResult.segments.map((segment, ind) => [segment[0], greenZoneResult.segment_product_count[ind]]);
});

async function onCalculate(value: NicheRequestData) {
  useRequestStore().setLevel(202);
  const response = await (new GreenZoneActions()).calculate(value);
  if (response.code === ResultCode.OK) {
    console.log(response.result)
    analyzeResult.value = response.result;
  }
}
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.segmentsAnalyze.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <div class="segments-analyze-wrapper">
          <CalculateWithCategoryComponent @calculate="onCalculate" :request-level="201"/>
          <div class="segments-result-wrapper" v-if="analyzeResult">
            <div class="segments-chart-wrapper">
              <BarChart class="segments-chart" :data="chartData"/>
              <div class="segments-result-interpretation">
                <div class="priority-segment-label recommendation-label">
                  Приоритетный сегмент: {{ analyzeResult.best_segment_idx + 1 }}
                </div>
                <div class="segment-recommendation-label recommendation-label">
                  Рекомендуется держать цену в диапазоне от
                  {{ analyzeResult.segments[analyzeResult.best_segment_idx][0] }}
                  до
                  {{ analyzeResult.segments[analyzeResult.best_segment_idx][1] }}
                </div>
                <div class="high-sells-segment-label recommendation-label">
                  Высокая выручка в сегменте от
                  {{ analyzeResult.segments[analyzeResult.best_segment_profit_idx][0] }}
                  до
                  {{ analyzeResult.segments[analyzeResult.best_segment_profit_idx][1] }}
                </div>
                <div class="high-gross-segment-label recommendation-label">
                  Высокий % с продажами в сегменте от
                  {{ analyzeResult.segments[analyzeResult.best_segment_product_with_trades_count_idx][0] }}
                  до
                  {{ analyzeResult.segments[analyzeResult.best_segment_product_with_trades_count_idx][1] }}
                </div>
              </div>
            </div>
            <div class="segments-recommendation-grid">
              <div class="grid-header segment-grid-row">
                <div class="grid-cell">Номер</div>
                <div class="grid-cell">Промежуток (₽)</div>
                <div class="grid-cell">Количество</div>
                <div class="grid-cell">Выручка (₽)</div>
                <div class="grid-cell">Количество проданых</div>
                <div class="grid-cell">Средняя<br>выручка (₽)</div>
              </div>
              <div class="segment-grid-row" v-for="ind in analyzeResult.segments.keys()" :key="ind">
                <div class="grid-cell">
                  {{ Number(ind) + 1 }}
                </div>
                <div class="grid-cell" :class="{best: ind == analyzeResult.best_segment_idx}">
                  {{ analyzeResult.segments[ind][0] }}-{{ analyzeResult.segments[ind][1] }}
                </div>
                <div class="grid-cell" :class="{best: ind == analyzeResult.best_segment_product_count_idx}">
                  {{ analyzeResult.segment_product_count[ind] }}
                </div>
                <div class="grid-cell" :class="{best: ind == analyzeResult.best_segment_profit_idx}">
                  {{ analyzeResult.segment_profits[ind] }}
                </div>
                <div class="grid-cell"
                     :class="{best: ind == analyzeResult.best_segment_product_with_trades_count_idx}">
                  {{ analyzeResult.segment_product_with_trades_count[ind] }}
                </div>
                <div class="grid-cell" :class="{best: ind == analyzeResult.best_mean_segment_profit_idx}">
                  {{ analyzeResult.mean_segment_profit[ind] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MiddleLineLayout>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
.section-body-wrapper {
  width: 100%;
  height: 100%;

  .segments-analyze-wrapper {
    width: 100%;
    padding-bottom: 50px;
    max-width: 1280px;

    .niche-input-label {
      margin-bottom: 15px;
    }

    .niche-input {
      display: flex;
      flex-direction: column;
      width: 500px;
      margin-bottom: 10px;
    }

    .select-wrapper {
      margin-bottom: 10px;
    }

    .segments-result-wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 50px;

      .segments-chart-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 50px;
        margin-bottom: 40px;
        height: 400px;

        .segments-chart {
          display: flex;
          flex: 2 0;
        }

        .segments-result-interpretation {
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex: 1 0;

          .recommendation-label {
            font-size: 20px;
            font-weight: bold;
          }
        }
      }

      .segments-recommendation-grid {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;

        .segment-grid-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 35px;
        }

        .grid-header {
          font-weight: bold;
        }

        .grid-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          border: 1px solid #B7FF44;
          background: rgba(84, 84, 84, 0.50);
          padding-block: 15px;

          &.best {
            background: #B7FF44;
            color: black;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
