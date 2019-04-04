import { TestBed, async, inject } from '@angular/core/testing';

import { AuthPrivateGuard } from './auth-private.guard';

describe('AuthPrivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPrivateGuard]
    });
  });

  it('should ...', inject([AuthPrivateGuard], (guard: AuthPrivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
