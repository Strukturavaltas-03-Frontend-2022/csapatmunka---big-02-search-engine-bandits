import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilleditorComponent } from './billeditor.component';

describe('BilleditorComponent', () => {
  let component: BilleditorComponent;
  let fixture: ComponentFixture<BilleditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilleditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilleditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
