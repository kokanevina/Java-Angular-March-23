import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(input: string, ...args: unknown[]): number {
    console.log(input); // input data coming to pipe
    console.log(args);
    
    return input.length;
  }

}
