import { TestBed } from '@angular/core/testing';

import { ServiciosusuarioService } from './serviciosusuario.service';

describe('ServiciosusuarioService', () => {
  let service: ServiciosusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
