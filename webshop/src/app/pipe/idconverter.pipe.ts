import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idconverter',
})
export class IdconverterPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(value: number, list: T[]): string {
    return 'null';
  }
}
