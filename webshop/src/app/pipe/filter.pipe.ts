import { Pipe, PipeTransform } from '@angular/core';

const possibleBooleanProperties = [ 'active', 'featured' ];

@Pipe({
  name: 'filter',
})
export class FilterPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(value: T[], phrase: string = '', property:string = ''): T[] {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    let filteredArray:T[] = value.filter(item =>{
      if(property === 'address') {
        return Object.values(item[property]).join().includes(phrase);
      }

      if(possibleBooleanProperties.includes(property)){
        let valueToLookFor:boolean = false;
        switch(phrase.toLowerCase())
        {
          case 'yes':
            valueToLookFor = true;
            break;
          case 'no':
            valueToLookFor = false;
            break;
          default:
            return true;
        }
        
        return item[property] === valueToLookFor;
      }

      if(!isNaN(item[property])) {
        return item[property] === Number(phrase);
      }

      return item[property].includes(phrase);
    });

    return filteredArray;
  }
}
