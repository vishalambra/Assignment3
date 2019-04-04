import { TestBed, async, inject } from '@angular/core/testing';

import { AuthPublicGuard } from './auth-public.guard';

describe('AuthPublicGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPublicGuard]
    });
  });

  it('should ...', inject([AuthPublicGuard], (guard: AuthPublicGuard) => {
    expect(guard).toBeTruthy();
  }));
});
