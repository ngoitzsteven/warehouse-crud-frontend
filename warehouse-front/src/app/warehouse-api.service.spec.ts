import { TestBed } from '@angular/core/testing';

import { WarehouseAPIService } from './warehouse-api.service';

describe('WarehouseAPIService', () => {
  let service: WarehouseAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
