import { TestBed } from '@angular/core/testing';

import { JrecordService } from './jrecord.service';

describe('JrecordService', () => {
  let service: JrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
