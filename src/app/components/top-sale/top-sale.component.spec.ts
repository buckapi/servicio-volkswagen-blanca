import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSaleComponent } from './top-sale.component';

describe('TopSaleComponent', () => {
  let component: TopSaleComponent;
  let fixture: ComponentFixture<TopSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
