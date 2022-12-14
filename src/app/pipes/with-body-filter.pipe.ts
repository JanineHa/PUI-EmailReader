import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({
  name: 'withBodyFilter',
})
export class WithBodyFilterPipe implements PipeTransform {
  transform(allEmails: Email[], withBodyFilter: boolean): Email[] {
    if (withBodyFilter) return allEmails.filter((email) => email.body != null);
    else return allEmails;
  }
}
