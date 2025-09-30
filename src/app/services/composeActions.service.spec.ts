import { TestBed } from '@angular/core/testing';

import { ComposeActionService } from './composeActions.service';

describe('ComposeActionService', () => {
  let service: ComposeActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
