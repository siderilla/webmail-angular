import { TestBed } from '@angular/core/testing';

import { ComposeService } from './compose.service';

describe('ButtonsService', () => {
  let service: ComposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
