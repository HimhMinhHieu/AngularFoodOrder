import { TestBed } from '@angular/core/testing';

import { MyUserReducerService } from './my-user-reducer.service';

describe('MyUserReducerService', () => {
  let service: MyUserReducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyUserReducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
