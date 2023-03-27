import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charat'
})
export class CharatPipe implements PipeTransform {

  transform(input: string, ...args: number[]): string {
    return input.charAt(args[0]);
  }

}
