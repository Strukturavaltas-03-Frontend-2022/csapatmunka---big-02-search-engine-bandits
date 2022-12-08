import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll method should exist', () => {
    expect(typeof service.getAll).not.toEqual('undefined');
    expect(service.getAll instanceof Function).toBeTrue();
  });
  it('get method should exist', () => {
    expect(typeof service.get).not.toEqual('undefined');
    expect(service.get instanceof Function).toBeTrue();
  });
  it('create method should exist', () => {
    expect(typeof service.create).not.toEqual('undefined');
    expect(service.create instanceof Function).toBeTrue();
  });
  it('update method should exist', () => {
    expect(typeof service.update).not.toEqual('undefined');
    expect(service.update instanceof Function).toBeTrue();
  });
  it('remove method should exist', () => {
    expect(typeof service.remove).not.toEqual('undefined');
    expect(service.remove instanceof Function).toBeTrue();
  });
});
