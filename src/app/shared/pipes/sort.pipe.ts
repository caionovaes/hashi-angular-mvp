import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../models/song.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Song[]): any {
    return this.sort(value);
  }

  sort(items: Song[]): Song[] {
    return this.divide(items);
  }

  divide(items: Song[]): Song[] {
    const halfLength = Math.ceil(items.length / 2);
    let low = items.slice(0, halfLength);
    let high = items.slice(halfLength);
    if (halfLength > 1) {
      low = this.divide(low);
      high = this.divide(high);
    }
    return this.combine(low, high);
  }

  combine(low: Song[], high: Song[]): Song[] {
    let indexLow = 0;
    let indexHigh = 0;
    const lengthLow = low.length;
    const lengthHigh = high.length;
    const combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
      const lowItem = low[indexLow];
      const highItem = high[indexHigh];
      if (lowItem !== undefined) {
        if (highItem === undefined) {
          combined.push(lowItem);
          indexLow++;
        } else {
          if (lowItem.likes > highItem.likes) {
            combined.push(lowItem);
            indexLow++;
          } else {
            combined.push(highItem);
            indexHigh++;
          }
        }
      } else {
        if (highItem !== undefined) {
          combined.push(highItem);
          indexHigh++;
        }
      }
    }
    return combined;
  }

}
