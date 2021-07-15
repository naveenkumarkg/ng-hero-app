import { TestBed } from '@angular/core/testing';

import { HeroseriveService } from './heroserive.service';

describe('HeroseriveService', () => {
  let service: HeroseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
