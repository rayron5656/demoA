import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [myFirstParam] = args;
    return value/3.4*myFirstParam;
  }

}
