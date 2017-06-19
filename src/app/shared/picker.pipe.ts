import { Pipe, PipeTransform } from '@angular/core';
import { Info } from './info.model';

@Pipe({
  name: 'picker'
})
export class PickerPipe implements PipeTransform {

  transform(value: Info[], args: string): boolean {
    for (const info of value) {
      if (info.name === args) {
        return info.liked;
      }
    }
    return false;
  }

}
