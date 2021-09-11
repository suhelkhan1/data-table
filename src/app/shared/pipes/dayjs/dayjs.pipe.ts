import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';


@Pipe({
  name: 'dayjs'
})
export class DayjsPipe implements PipeTransform {

  /**
   * Using DayJs Library for date manupulations
   * Fast 2kB alternative to Moment.js with the same modern API
   * @param value: Date Input
   * @param args: Date format key
   * @returns Formated Date
   */
  transform(value: string, ...args: string[]): any {
    switch (args[0]) {
      case 'format':  return dayjs(value).format(args[1]);
    }
  }

}
