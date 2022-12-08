import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  billService: BillService = inject(BillService);
  configService: ConfigService = inject(ConfigService);
  toastr: ToastrService = inject(ToastrService);

  //paginator
  page: number = 1;
  billList: Bill[] = [];

  //searcher
  searchPhrase: string = '';
  searchBy: string = 'name';

  //thead
  columns: ITableColumn[] = this.configService.billTableColumns;

  sortKey: string = 'id';
  sortDirection: number = 1;

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
      this.billService.remove(bill).subscribe(() =>
        this.billService.getAll().subscribe((bills) => {
          this.toastr.error('Bill deleted successfully!', 'Bill deleted!', {
            timeOut: 3000,
          });
          this.billList = bills;
        })
      );
    }
  }

  setSort(key: string): void {
    if (key === this.sortKey) {
      this.sortDirection *= -1;
    }
    this.sortKey = key;
  }

  onSearch(event: any): void {
    this.searchPhrase = event.target.value;
  }

  //Drag and Drop
  drop(event: CdkDragDrop<{ title: string; key: string }[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
