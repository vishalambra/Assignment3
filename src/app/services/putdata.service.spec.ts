import { TestBed } from '@angular/core/testing';

import { PutdataService } from './putdata.service';

describe('PutdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutdataService = TestBed.get(PutdataService);
    expect(service).toBeTruthy();
  });
});
