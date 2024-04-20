import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGridComponent } from './special-grid.component';

describe('SpecialGridComponent', () => {
  let component: SpecialGridComponent;
  let fixture: ComponentFixture<SpecialGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
