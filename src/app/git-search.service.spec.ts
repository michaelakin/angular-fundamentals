import { TestBed, inject } from '@angular/core/testing';

import { GitSearchService } from './git-service.service';

describe('GitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitSearchService]
    });
  });

  it('should be created', inject([GitSearchService], (service: GitSearchService) => {
    expect(service).toBeTruthy();
  }));
});
