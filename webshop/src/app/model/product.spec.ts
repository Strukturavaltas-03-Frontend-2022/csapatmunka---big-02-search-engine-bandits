import { Product } from './product';
//export class Product {
/*   id: number = 0;
  name: string = '';
  type: string = '';
  catID: number = 0;
  description: string = '';
  price: number = 0;
  featured: boolean = false;
  active: boolean = false;
 */
describe('Product', () => {
  it('should create an instance', () => {
    const product = new Product();
    expect(product).toBeTruthy();
    expect(product instanceof Product).toBeTrue();
  });
  it('id should be exist', () => {
    const product = new Product();
    expect(typeof product.id).not.toEqual('undefined');
    expect(typeof product.id).toEqual('number');
  });
  it('name should be exist', () => {
    const product = new Product();
    expect(typeof product.name).not.toEqual('undefined');
    expect(typeof product.name).toEqual('string');
  });
  it('type should be exist', () => {
    const product = new Product();
    expect(typeof product.type).not.toEqual('undefined');
    expect(typeof product.type).toEqual('string');
  });
  it('catID should be exist', () => {
    const product = new Product();
    expect(typeof product.catID).not.toEqual('undefined');
    expect(typeof product.catID).toEqual('number');
  });
  it('description should be exist', () => {
    const product = new Product();
    expect(typeof product.description).not.toEqual('undefined');
    expect(typeof product.description).toEqual('string');
  });
  it('price should be exist', () => {
    const product = new Product();
    expect(typeof product.price).not.toEqual('undefined');
    expect(typeof product.price).toEqual('number');
  });
  it('featured should be exist', () => {
    const product = new Product();
    expect(typeof product.featured).not.toEqual('undefined');
    expect(typeof product.featured).toEqual('boolean');
  });
  it('active should be exist', () => {
    const product = new Product();
    expect(typeof product.active).not.toEqual('undefined');
    expect(typeof product.active).toEqual('boolean');
  });
});
