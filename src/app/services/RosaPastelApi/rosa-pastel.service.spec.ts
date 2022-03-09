import { TestBed } from '@angular/core/testing';

import { RosaPastelService } from './rosa-pastel.service';

describe('RosaPastelService', () => {
  let service: RosaPastelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosaPastelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
