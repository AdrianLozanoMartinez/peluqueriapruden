import { TestBed } from '@angular/core/testing';

import { CitasservicioadService } from './citasservicioad.service';

describe('CitasservicioadService', () => {
  let service: CitasservicioadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasservicioadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
