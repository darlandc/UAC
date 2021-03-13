import { TestBed } from '@angular/core/testing';

import { SkyrimService } from './skyrim.service';

describe('SkyrimService', () => {
  let service: SkyrimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkyrimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
