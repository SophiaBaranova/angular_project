import { TestBed } from '@angular/core/testing';

import { TechnologyItemsService } from './technology-items.service';

describe('TechnologyItemsService', () => {
  let service: TechnologyItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
