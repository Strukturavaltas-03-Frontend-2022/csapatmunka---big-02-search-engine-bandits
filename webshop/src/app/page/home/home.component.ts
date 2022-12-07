import { Component, OnInit, ViewChild } from '@angular/core';
import {  ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  yaxis: ApexYAxis,
  stroke: ApexStroke,
  legend: ApexLegend,
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: any;
  
    constructor() {
      this.chartOptions = {
        series: [42, 39, 35, 29],
          chart: {
            width: 380,
            type: 'polarArea'
          },
          labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D'],
          fill: {
            opacity: 1
          },
          stroke: {
            width: 1,
            colors: undefined
          },
          yaxis: {
            show: false
          },
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 0
              }
            }
          },
          theme: {
            monochrome: {
              //    enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.6
            }
          }
      };
    }
    ngOnInit(): void {}
  }

