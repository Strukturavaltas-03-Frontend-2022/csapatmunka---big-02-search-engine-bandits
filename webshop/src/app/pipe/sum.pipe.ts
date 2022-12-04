import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
})
export class SumPipe<T extends { [x: string]: any }> implements PipeTransform {
  transform(value: T[], colKey: string = ''): string {
    if (!Array.isArray(value) || !colKey) {
      return '0';
    }

    let output = 0;

    value.forEach((value) => {
      output += Number(value[colKey]);
    });

    return '' + output;
  }
}
