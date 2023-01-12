import { TestBed } from '@angular/core/testing';

import { LoggingGuardGuard } from './logging-guard.guard';

describe('LoggingGuardGuard', () => {
  let guard: LoggingGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggingGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
