import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomereditorComponent } from './customereditor.component';

describe('CustomereditorComponent', () => {
  let component: CustomereditorComponent;
  let fixture: ComponentFixture<CustomereditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomereditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomereditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
