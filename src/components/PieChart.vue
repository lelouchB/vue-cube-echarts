<template>
  <div class="charts-wrapper">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref } from "vue";

use([
  CanvasRenderer,
  PieChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "PieChart",
  components: {
    VChart,
  },
  props: {
    title: String,
    resultSet: Object,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  setup(props) {
    const headers = props.resultSet
      .rawData()
      .map((item) => Object.values(item)[0]);

    const data = props.resultSet.rawData().map((item) => {
      const currentItem = Object.values(item);
      return { name: currentItem[0], value: currentItem[1] };
    });

    const option = ref({
      title: {
        text: "Paintings Classification",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: headers,
      },
      series: [
        {
          name: "Paintings Classification",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    return { option };
  },
};
</script>
<style scoped>
.chart {
  height: 400px;
}
</style>