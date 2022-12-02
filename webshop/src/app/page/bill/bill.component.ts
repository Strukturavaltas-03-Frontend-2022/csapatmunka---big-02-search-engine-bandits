import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  billService: BillService = inject(BillService);

  //paginator
  page: number = 1;
  billList: Bill[] = [];

  constructor() {}

  ngOnInit(): void {
    this.billService
      .getAll()
      .subscribe((dataList) => (this.billList = dataList));
  }

  //delete method
  removeBill(bill: Bill): void {
    if (confirm('Are you sure?')) {
      this.billService
        .remove(bill)
        .subscribe(() =>
          this.billService.getAll().subscribe(() => location.reload())
        );
    }
  }
}
