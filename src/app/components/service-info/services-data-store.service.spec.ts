import { TestBed } from '@angular/core/testing';

import { ServicesDataStoreService } from './services-data-store.service';

describe('ServicesDataStoreService', () => {
  let service: ServicesDataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
