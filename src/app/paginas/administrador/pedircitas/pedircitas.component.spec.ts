import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedircitasComponent } from './pedircitas.component';

describe('PedircitasComponent', () => {
  let component: PedircitasComponent;
  let fixture: ComponentFixture<PedircitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedircitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedircitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
