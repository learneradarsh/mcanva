import { TestBed } from '@angular/core/testing';

import { TemplateData.Service.TsService } from './template-data.service.ts.service';

describe('TemplateData.Service.TsService', () => {
  let service: TemplateData.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateData.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
