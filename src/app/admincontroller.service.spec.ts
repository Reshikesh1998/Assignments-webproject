import { TestBed } from '@angular/core/testing';

import { AdmincontrollerService } from './admincontroller.service';

describe('AdmincontrollerService', () => {
  let service: AdmincontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
