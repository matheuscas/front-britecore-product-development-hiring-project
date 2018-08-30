import { TestBed, inject } from '@angular/core/testing';

import { RisktypesService } from './risktypes.service';

describe('RisktypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RisktypesService]
    });
  });

  it('should be created', inject([RisktypesService], (service: RisktypesService) => {
    expect(service).toBeTruthy();
  }));
});
