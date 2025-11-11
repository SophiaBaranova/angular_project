import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';
    const date = moment(value);
    if (!date.isValid()) return '';
    const formattedDate = date.format('MMMM DD, YYYY');
    const ago = date.fromNow();
    return `${formattedDate} (${ago})`;
  }
}