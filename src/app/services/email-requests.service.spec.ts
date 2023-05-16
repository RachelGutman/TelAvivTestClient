import { TestBed } from '@angular/core/testing';

import { EmailRequestsService } from './email-requests.service';

describe('EmailRequestsService', () => {
  let service: EmailRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
