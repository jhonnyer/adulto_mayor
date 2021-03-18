import { TestBed } from '@angular/core/testing';

import { FormAdultoService } from './form-adulto.service';

describe('FormAdultoService', () => {
  let service: FormAdultoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAdultoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
