import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VercitasComponent } from './vercitas.component';

describe('VercitasComponent', () => {
  let component: VercitasComponent;
  let fixture: ComponentFixture<VercitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VercitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
