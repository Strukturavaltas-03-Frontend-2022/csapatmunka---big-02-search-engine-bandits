import { Component, inject, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
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
import { Bill } from 'src/app/model/bill';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { BillService } from 'src/app/service/bill.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

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

class DashboardModel
{
  activeProducts: number = 0;
  activeCustomers: number = 0;
  unPaidOrders: number = 0;
  unPaidBills: number = 0;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  orderService: OrderService = inject(OrderService);
  productService: ProductService = inject(ProductService);
  customerService: CustomerService = inject(CustomerService);
  billService: BillService = inject(BillService);
  
  orders: Order[] = [];
  products: Product[] = [];
  activeProductsCount: number = this.products.filter(p => p.active === true).length;
  customers: Customer[] = [];
  bills: Bill[] = [];

  dashboardData: DashboardModel = new DashboardModel();

  constructor() {

  }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
      this.dashboardData.unPaidOrders = orders.filter(o => o.status !== 'paid').length;
      this.setOrderChart();
    });
    this.productService.getAll().subscribe(products =>{
       this.products = products;
       this.dashboardData.activeProducts = products.filter(p => p.active).length;
    });
    this.customerService.getAll().subscribe(customers => {
       this.customers = customers;
       this.dashboardData.activeCustomers = customers.filter(c => c.active).length;
    });
    this.billService.getAll().subscribe(bills =>{
       this.bills = bills;
       this.dashboardData.unPaidBills = bills.filter(b => b.status !== 'paid').length;
       this.setBillChart();
    });
  }

  setBillChart(): void {
    let options = {
      series: [
        this.bills.filter(b => b.status === 'new').length, 
        this.bills.filter(b => b.status === 'paid').length
      ],
      chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['New bills', 'Paid bills'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };

    let chart = new ApexCharts(document.querySelector("#bills"), options);
    chart.render();
  }

  setOrderChart(): void {
    let options = {
      series: [
        this.orders.filter(b => b.status === 'new').length, 
        this.orders.filter(b => b.status === 'paid').length,
        this.orders.filter(b => b.status === 'shipped').length
      ],
      chart: {
        width: 420,
        type: 'pie',
    },
    labels: ['New orders', 'Paid orders', 'Shipped orders'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };

    let chart = new ApexCharts(document.querySelector("#orders"), options);
    chart.render();
  }
}
