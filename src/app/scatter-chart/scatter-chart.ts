import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgxEchartsModule } from "ngx-echarts";

@Component({
  selector: "app-scatter-chart",
  imports: [CommonModule, NgxEchartsModule],

  templateUrl: "./scatter-chart.html",
  styleUrl: "./scatter-chart.css",
})
export class ScatterChartComponent {
  chartOptions = {
    title: {
      text: "Scatter Plot Example",
    },
    tooltip: {
      trigger: "item",
      formatter: "({c})",
    },
    xAxis: {
      name: "X Axis",
    },
    yAxis: {
      name: "Y Axis",
    },
    series: [
      {
        name: "Series 1",
        type: "scatter",
        symbolSize: 10,
        data: [
          [10, 8],
          [15, 20],
          [20, 30],
          [25, 10],
          [30, 40],
        ],
      },
      {
        name: "Series 2",
        type: "scatter",
        symbolSize: 12,
        data: [
          [5, 15],
          [12, 25],
          [18, 35],
          [22, 18],
          [28, 45],
        ],
      },
    ],
  };
}
