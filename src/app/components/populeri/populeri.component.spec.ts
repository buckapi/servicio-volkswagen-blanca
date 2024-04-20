import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuleriComponent } from './populeri.component';

describe('PopuleriComponent', () => {
  let component: PopuleriComponent;
  let fixture: ComponentFixture<PopuleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopuleriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopuleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
