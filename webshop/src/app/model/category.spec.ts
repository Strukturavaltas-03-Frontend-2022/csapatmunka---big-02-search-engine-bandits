import { Category } from './category';

/* id: number = 0;
  name: string = '';
  description: string = '';
 */

describe('Category', () => {
  it('should create an instance', () => {
    expect(new Category()).toBeTruthy();
  });
  it('id should be exist', () => {
    const category = new Category();
    expect(typeof category.id).not.toEqual('undefined');
    expect(typeof category.id).toEqual('number');
  });
  it('name should be exist', () => {
    const category = new Category();
    expect(typeof category.name).not.toEqual('undefined');
    expect(typeof category.name).toEqual('string');
  });
  it('description should be exist', () => {
    const category = new Category();
    expect(typeof category.description).not.toEqual('undefined');
    expect(typeof category.description).toEqual('string');
  });
});
