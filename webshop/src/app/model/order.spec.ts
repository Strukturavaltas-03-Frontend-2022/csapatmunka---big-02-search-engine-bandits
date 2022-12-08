import { Order } from './order';

/* id: number = 0;
  customerID: number = 0;
  productID: number = 0;
  amount: number = 0;
  status: string = ''; */

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });
  it('id should be exist', () => {
    const order = new Order();
    expect(typeof order.id).not.toEqual('undefined');
    expect(typeof order.id).toEqual('number');
  });
  it('customerID should be exist', () => {
    const order = new Order();
    expect(typeof order.customerID).not.toEqual('undefined');
    expect(typeof order.customerID).toEqual('number');
  });
  it('productID should be exist', () => {
    const order = new Order();
    expect(typeof order.productID).not.toEqual('undefined');
    expect(typeof order.productID).toEqual('number');
  });
  it('amount should be exist', () => {
    const order = new Order();
    expect(typeof order.amount).not.toEqual('undefined');
    expect(typeof order.amount).toEqual('number');
  });
  it('status should be exist', () => {
    const order = new Order();
    expect(typeof order.status).not.toEqual('undefined');
    expect(typeof order.status).toEqual('string');
  });
});
