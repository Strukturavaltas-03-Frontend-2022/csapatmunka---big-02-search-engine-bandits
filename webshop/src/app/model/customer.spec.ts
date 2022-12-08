import { Customer } from './customer';

/* id: number = 0;
firstName: string = '';
lastName: string = '';
email: string = '';
address: Address = new Address();
active: boolean = false;
 */
describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
  it('id should be exist', () => {
    const customer = new Customer();
    expect(typeof customer.id).not.toEqual('undefined');
    expect(typeof customer.id).toEqual('number');
  });
  it('firstName should be exist', () => {
    const customer = new Customer();
    expect(typeof customer.firstName).not.toEqual('undefined');
    expect(typeof customer.firstName).toEqual('string');
  });
  it('lastName should be exist', () => {
    const customer = new Customer();
    expect(typeof customer.lastName).not.toEqual('undefined');
    expect(typeof customer.lastName).toEqual('string');
  });
  it('email should be exist', () => {
    const customer = new Customer();
    expect(typeof customer.email).not.toEqual('undefined');
    expect(typeof customer.email).toEqual('string');
  });
  it('address should be exist', () => {
    const customer = new Customer();
    expect(typeof customer.address).not.toEqual('undefined');
    expect(typeof customer.address).toEqual('object');
  });
  it('active should be exist', () => {
    const customer = new Customer();
    expect(typeof customer.active).not.toEqual('undefined');
    expect(typeof customer.active).toEqual('boolean');
  });
});
