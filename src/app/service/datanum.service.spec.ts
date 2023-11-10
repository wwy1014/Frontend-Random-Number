import { TestBed } from '@angular/core/testing';

import { DatanumService } from './datanum.service';

describe('DatanumService', () => {
  let service: DatanumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatanumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
