import { TestBed } from '@angular/core/testing';

import { UsercontrollerService } from './usercontroller.service';

describe('UsercontrollerService', () => {
  let service: UsercontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
