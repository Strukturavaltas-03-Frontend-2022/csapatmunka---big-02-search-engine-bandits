import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
})
export class CounterPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(value: T[], colKey: string = '', colValue: string = ''): string {
    if (!Array.isArray(value) || !colKey) {
      return '0';
    }

    let output = 0;

    value.forEach((value) => {
      if (value[colKey] === colValue) {
        output += 1;
      }

      //output += Number(value[colKey]);
    });

    return '' + output;
  }
}
