import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import * as echarts from "echarts/core";
import { provideEchartsCore } from "ngx-echarts";
import { ScatterChartComponent } from "./app/scatter-chart/scatter-chart";

// ECharts modules
import { LineChart, ScatterChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 🔧 Register required pieces
echarts.use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ScatterChart,
]);

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ScatterChartComponent],
  template: ` <app-scatter-chart></app-scatter-chart> `,
})
export class App {
  name = "Angular";
}

bootstrapApplication(App, {
  providers: [provideEchartsCore({ echarts })],
}).catch((err) => console.error(err));
