import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingkasanComponent } from './ringkasan.component';

describe('RingkasanComponent', () => {
  let component: RingkasanComponent;
  let fixture: ComponentFixture<RingkasanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingkasanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingkasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
