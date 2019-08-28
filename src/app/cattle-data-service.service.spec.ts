import { TestBed } from '@angular/core/testing';

import { CattleDataServiceService } from './cattle-data-service.service';

describe('CattleDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CattleDataServiceService = TestBed.get(CattleDataServiceService);
    expect(service).toBeTruthy();
  });
});
