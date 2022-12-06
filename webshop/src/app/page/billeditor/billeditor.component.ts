import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-billeditor',
  templateUrl: './billeditor.component.html',
  styleUrls: ['./billeditor.component.scss'],
})
export class BilleditorComponent implements OnInit {
  billService: BillService = inject(BillService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  bill$: Observable<Bill> = this.ar.params.pipe(
    switchMap((params) => this.billService.get(params['id']))
  );

  bill: Bill = new Bill();
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.bill$.subscribe((bill) => {
      this.bill = bill;
    });
  }

  onChecked(): void {
    this.checked = !this.checked;
  }

  onSubmit(bill: Bill): void {
    bill.id = Number(bill.id);

    if (this.bill.id) {
      this.billService
        .update(bill)
        .subscribe((bill) => this.router.navigate(['/home']));
    } else if (!this.bill.id) {
      this.billService
        .create(bill)
        .subscribe((bill) => this.router.navigate(['/home']));
    }
  }
}
