import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../model/address';
import { Customer } from '../model/customer';

@Pipe({
  name: 'filter',
})
export class FilterPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(value: Customer[], phrase: string = ''): Customer[] {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    let filteredArray = [];

    if ('active'.startsWith(phrase))
      filteredArray = value.filter(
        (i) =>
          Object.values(i).join(' ').toLowerCase().includes(phrase) ||
          Object.values(i.address).join(' ').toLowerCase().includes(phrase) ||
          i.active === true
      );
    else if ('inactive'.startsWith(phrase))
      filteredArray = value.filter(
        (i) =>
          Object.values(i).join(' ').toLowerCase().includes(phrase) ||
          Object.values(i.address).join(' ').toLowerCase().includes(phrase) ||
          i.active === false
      );
    else
      filteredArray = value.filter(
        (i) =>
          Object.values(i).join(' ').toLowerCase().includes(phrase) ||
          Object.values(i.address).join(' ').toLowerCase().includes(phrase)
      );

    return filteredArray;
  }
}
