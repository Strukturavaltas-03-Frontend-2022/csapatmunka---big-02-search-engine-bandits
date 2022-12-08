import { Bill } from './bill';

/* id: number = 0;
  orderID: number = 0;
  amount: number = 0;
  status: string = ''; */

describe('Bill', () => {
  it('should create an instance', () => {
    expect(new Bill()).toBeTruthy();
  });
  it('id should be exist', () => {
    const bill = new Bill();
    expect(typeof bill.id).not.toEqual('undefined');
    expect(typeof bill.id).toEqual('number');
  });
  it('orderID should be exist', () => {
    const bill = new Bill();
    expect(typeof bill.orderID).not.toEqual('undefined');
    expect(typeof bill.orderID).toEqual('number');
  });
  it('amount should be exist', () => {
    const bill = new Bill();
    expect(typeof bill.amount).not.toEqual('undefined');
    expect(typeof bill.amount).toEqual('number');
  });
  it('status should be exist', () => {
    const bill = new Bill();
    expect(typeof bill.status).not.toEqual('undefined');
    expect(typeof bill.status).toEqual('string');
  });
});
