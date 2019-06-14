import { TestBed } from '@angular/core/testing';

import { ExtractionDonneesService } from './extraction-donnees.service';

describe('ExtractionDonneesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtractionDonneesService = TestBed.get(ExtractionDonneesService);
    expect(service).toBeTruthy();
  });
});
