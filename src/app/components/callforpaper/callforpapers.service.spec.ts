import { TestBed } from '@angular/core/testing';

import { CallforpapersService } from './callforpapers.service';

describe('CallforpapersService', () => {
  let service: CallforpapersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallforpapersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
