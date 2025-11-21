import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderspage } from './orderspage';

describe('Orderspage', () => {
  let component: Orderspage;
  let fixture: ComponentFixture<Orderspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
