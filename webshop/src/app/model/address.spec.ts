import { Address } from './address';

/* zip: string = '';
  country: string = '';
  city: string = '';
  street: string = '';
  notes: string = ''; */

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address()).toBeTruthy();
  });
  it('zip should be exist', () => {
    const address = new Address();
    expect(typeof address.zip).not.toEqual('undefined');
    expect(typeof address.zip).toEqual('string');
  });
  it('country should be exist', () => {
    const address = new Address();
    expect(typeof address.country).not.toEqual('undefined');
    expect(typeof address.country).toEqual('string');
  });
  it('city should be exist', () => {
    const address = new Address();
    expect(typeof address.city).not.toEqual('undefined');
    expect(typeof address.city).toEqual('string');
  });
  it('street should be exist', () => {
    const address = new Address();
    expect(typeof address.street).not.toEqual('undefined');
    expect(typeof address.street).toEqual('string');
  });
  it('notes should be exist', () => {
    const address = new Address();
    expect(typeof address.notes).not.toEqual('undefined');
    expect(typeof address.notes).toEqual('string');
  });
});
