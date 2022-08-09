import { TestBed } from '@angular/core/testing';

import { TemplateDataService } from './template-data.service';

describe('TemplateData.Service.TsService', () => {
  let service: TemplateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
