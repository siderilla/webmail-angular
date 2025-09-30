import { TestBed } from '@angular/core/testing';

import { ComposeButtonService } from './composeButton.service';

describe('ComposeButtonService', () => {
  let service: ComposeButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
