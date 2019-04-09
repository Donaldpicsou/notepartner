import { TestBed } from '@angular/core/testing';

import { CrudPartnerService } from './crud-partner.service';

describe('CrudPartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudPartnerService = TestBed.get(CrudPartnerService);
    expect(service).toBeTruthy();
  });
});
