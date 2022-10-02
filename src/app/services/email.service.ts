import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private email: Email;
  private emailList: Email[];

  constructor() {
    this.email = { id: 0, from: '', to: '', subject: '', body: undefined };
    this.emailList = [
      {
        id: 1,
        from: 'email1@upm.es',
        to: 'email2@upm.es',
        subject: 'hello',
        body: undefined,
      },
      {
        id: 2,
        from: 'email2@upm.es',
        to: 'email3@upm.es',
        subject: 'hello again',
        body: undefined,
      },
      {
        id: 3,
        from: 'email3@upm.es',
        to: 'email4@upm.es',
        subject: 'hello again',
        body: undefined,
      },
    ];
  }

  getEmails(): Email[] {
    return this.emailList;
  }

  getEmail(): Email {
    return this.email;
  }

  addToList(newId: number, newEmail: Email): Email[] {
    if (this.emailList.findIndex((item) => item.id !== newId) !== -1) {
      newEmail.id = newId;
      this.emailList.push(newEmail);
      return this.emailList;
    } else {
      this.emailList.push(newEmail);
      return this.emailList;
    }
  }
  deleteFromListId(id: number): Email[] {
    if (this.emailList.find((item) => item.id === id)) {
      var indexOfDeletedEmail = this.emailList.findIndex(
        (item) => item.id === id
      );
      this.emailList.splice(indexOfDeletedEmail, 1);
      return this.emailList;
    } else {
      return this.emailList;
    }
  }

  findIndex(id: number): number {
    if (this.emailList.find((item) => item.id === id)) {
      var indexOfEmail = this.emailList.findIndex((item) => item.id === id);
      return indexOfEmail;
    } else {
      return 0;
    }
  }

  genId(email: Email[]): number {
    return email.length > 0
      ? Math.max(...email.map((email) => email.id)) + 1
      : 11;
  }
}
