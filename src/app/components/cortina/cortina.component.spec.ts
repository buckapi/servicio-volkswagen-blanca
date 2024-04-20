import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortinaComponent } from './cortina.component';

describe('CortinaComponent', () => {
  let component: CortinaComponent;
  let fixture: ComponentFixture<CortinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CortinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
