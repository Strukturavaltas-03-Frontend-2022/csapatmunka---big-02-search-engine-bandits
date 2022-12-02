import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  billService: BillService = inject(BillService);
  configService: ConfigService = inject(ConfigService);

  //paginator
  page: number = 1;
  billList: Bill[] = [];

  //searcher
  phrase$: BehaviorSubject<string> = this.configService.searchPhrase$;

  //thead
  columns: ITableColumn[] = this.configService.billTableColumns;

  constructor() {}

  ngOnInit(): void {
    this.billService
      .getAll()
      .subscribe((dataList) => (this.billList = dataList));

    this.configService.searchPhrase$.next('');
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
