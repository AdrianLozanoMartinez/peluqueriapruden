import { TestBed } from '@angular/core/testing';

import { ServicioadministradorService } from './servicioadministrador.service';

describe('ServicioadministradorService', () => {
  let service: ServicioadministradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioadministradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
