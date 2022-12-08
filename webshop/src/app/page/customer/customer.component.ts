import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerService: CustomerService = inject(CustomerService);
  configService: ConfigService = inject(ConfigService);
  toastr: ToastrService = inject(ToastrService);

  customerList$: Observable<Customer[]> = this.customerService.getAll();

  //paginator
  page: number = 1;
  customerList: Customer[] = [];

  //searcher
  searchPhrase: string = '';
  searchBy: string = 'name';

  //thead
  columns: ITableColumn[] = this.configService.customerTableColumns;

  sortKey: string = 'id';
  sortDirection: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.customerService
      .getAll()
      .subscribe((dataList) => (this.customerList = dataList));
  }

  removeBill(customer: Customer): void {
    if (confirm('Are you sure?')) {
      this.customerService.remove(customer).subscribe(() =>
        this.customerService.getAll().subscribe((customers) => {
          this.toastr.error(
            'Customer deleted successfully!',
            'Customer deleted!',
            { timeOut: 3000 }
          );
          this.customerList = customers;
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
