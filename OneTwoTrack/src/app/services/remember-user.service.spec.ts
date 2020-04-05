import { TestBed } from '@angular/core/testing';

import { RememberUserService } from './remember-user.service';

describe('RememberUserService', () => {
  let service: RememberUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RememberUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
