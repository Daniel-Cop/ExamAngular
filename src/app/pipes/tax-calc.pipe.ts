import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxCalc',
  standalone: true
})
export class TaxCalcPipe implements PipeTransform {

  transform(value: number, tva: number): number {
    return value + (value*tva);
  }

}
