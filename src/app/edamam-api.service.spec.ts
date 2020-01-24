import { TestBed } from '@angular/core/testing';

import { EdamamApiService } from './edamam-api.service';

describe('EdamamApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdamamApiService = TestBed.get(EdamamApiService);
    expect(service).toBeTruthy();
  });
});
