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

  constructor() {}

  ngOnInit(): void {
    this.bill$.subscribe((bill) => {
      this.bill = bill;
    });
  }
}
