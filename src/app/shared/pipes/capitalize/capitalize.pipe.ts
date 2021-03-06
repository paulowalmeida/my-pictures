import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(text: string) {
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
  }
}
