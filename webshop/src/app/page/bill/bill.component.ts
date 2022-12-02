import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  billService: BillService = inject(BillService);

  billList$: Observable<Bill[]> = this.billService.getAll();

  constructor() {}

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
