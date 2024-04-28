import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuickComponent } from './modal-quick.component';

describe('ModalQuickComponent', () => {
  let component: ModalQuickComponent;
  let fixture: ComponentFixture<ModalQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalQuickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
