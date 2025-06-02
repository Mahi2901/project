import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toString().toUpperCase();
  }

}
