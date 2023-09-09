<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/components/view-workspace/workspaceSections";
import ControlSelect from "@/components/controls/ControlSelect.vue";
import {computed, ref} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {niches} from "@/nichesData";
import type {GreenZoneResultData, SelectOptionType} from "@/types/DataTypes";
import {GreenZoneActions} from "@/requests/request-actions/calculations/GreenZoneActions";
import {ResultCode} from "@/requests/ResultCode";
import BarChart from "@/components/view-workspace/visualizers/BarChart.vue";

const selectedCategoryID = ref("");
const selectedNicheID = ref("");
const analyzeResult = ref<GreenZoneResultData | undefined>(undefined);
const calculateActions = new GreenZoneActions();

const categoryOptions: SelectOptionType[] = Object.keys(niches).reduce(
    (accum, val, ind) => {
      accum.push({name: val, value: ind + 2})
      return accum;
    }, []);

const nicheOptions = computed<SelectOptionType[]>(() => {
  const nichesArray = niches[categoryOptions.find((option) => option.value == selectedCategoryID.value)?.name];
  if (!nichesArray) return [];
  return nichesArray.reduce(
      (accum, val, ind) => {
        accum.push({name: val, value: ind + 2})
        return accum;
      }, []);
});

const chartData = computed<[number, number][]>(() => {
  const segments = analyzeResult.value?.freq;
  if (!segments) return [];
  return segments.x.map((segment, ind) => {
    return [segment, segments.y[ind]];
  });
});

async function onCalculate() {
  const response = await calculateActions.calculate({
    category_id: Number(selectedCategoryID.value),
    niche: nicheOptions.value.find((niche) => niche.value == selectedNicheID.value)?.name || "",
    marketplace_id: 2
  })
  if (response.code === ResultCode.OK) {
    analyzeResult.value = response.result;
  }
}
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.segmentsAnalyze.title }}</template>
    <div class="section-body-wrapper">
      <div class="segments-analyze-wrapper">
        <div class="niche-input">
          <div class="niche-input-label">Выберите категорию и нишу для расчёта:</div>
          <ControlSelect class="select-wrapper"
                         v-model:selected-value="selectedCategoryID"
                         @update:selected-value="selectedNicheID=''"
                         :options="categoryOptions"
                         placeholder="Категория"
          />
          <ControlSelect class="select-wrapper"
                         v-model:selected-value="selectedNicheID"
                         :options="nicheOptions"
                         placeholder="Ниша"
          />
        </div>
        <ControlButton class="calculate-button" @click="onCalculate">Рассчитать</ControlButton>
        <div class="segments-result-wrapper" v-if="analyzeResult">
          <div class="segments-chart-wrapper">
            <BarChart class="segments-chart" :data="chartData"/>
            <div class="segments-result-interpretation">
              <div class="priority-segment-label recommendation-label">
                Приоритетный сегмент: {{ analyzeResult.green.best_segment_idx + 1 }}
              </div>
              <div class="segment-recommendation-label recommendation-label">
                Рекомендуется держать цену в диапазоне от
                {{ analyzeResult.green.segments[analyzeResult.green.best_segment_idx][0] }}
                до
                {{ analyzeResult.green.segments[analyzeResult.green.best_segment_idx][1] }}
              </div>
              <div class="high-sells-segment-label recommendation-label">
                Высокая выручка в сегменте от
                {{ analyzeResult.green.segments[analyzeResult.green.best_segment_profit_idx][0] }}
                до
                {{ analyzeResult.green.segments[analyzeResult.green.best_segment_profit_idx][1] }}
              </div>
              <div class="high-gross-segment-label recommendation-label">
                Высокий % с продажами в сегменте от
                {{ analyzeResult.green.segments[analyzeResult.green.best_segment_product_with_trades_count_idx][0] }}
                до
                {{ analyzeResult.green.segments[analyzeResult.green.best_segment_product_with_trades_count_idx][1] }}
              </div>
            </div>
          </div>
          <div class="segments-recommendation-grid">
            <div class="grid-header segment-grid-row">
              <div class="grid-cell">Номер</div>
              <div class="grid-cell">Промежуток</div>
              <div class="grid-cell">Количество</div>
              <div class="grid-cell">Выручка</div>
              <div class="grid-cell">Количество проданых</div>
              <div class="grid-cell">Средняя выручка</div>
            </div>
            <div class="segment-grid-row" v-for="(_, ind) in analyzeResult.freq.x" :key="ind">
              <div class="grid-cell">
                {{ ind + 1 }}
              </div>
              <div class="grid-cell" :class="{best: ind === analyzeResult.green.best_segment_idx}">
                {{ analyzeResult.green.segments[ind][0] }}-{{ analyzeResult.green.segments[ind][1] }}
              </div>
              <div class="grid-cell" :class="{best: ind === analyzeResult.green.best_segment_product_count_idx}">
                {{ analyzeResult.green.segment_product_count[ind] }}
              </div>
              <div class="grid-cell" :class="{best: ind === analyzeResult.green.best_segment_profit_idx}">
                {{ analyzeResult.green.segment_profits[ind] }}
              </div>
              <div class="grid-cell"
                   :class="{best: ind === analyzeResult.green.best_segment_product_with_trades_count_idx}">
                {{ analyzeResult.green.segment_product_with_trades_count[ind] }}
              </div>
              <div class="grid-cell" :class="{best: ind === analyzeResult.green.best_mean_segment_profit_idx}">
                {{ analyzeResult.green.mean_segment_profit[ind] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
.section-body-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-inline: 30px;

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

    .calculate-button {
      width: 300px;
    }

    .segments-result-wrapper {
      display: flex;
      flex-direction: column;

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
