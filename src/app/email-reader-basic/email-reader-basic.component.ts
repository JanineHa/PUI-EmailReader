import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.sass'],
})
export class EmailReaderBasicComponent implements OnInit {
  email: Email;

  constructor() {
    this.email = { id: 0, from: '', to: '', subject: '', body: '' };
  }

  ngOnInit(): void {}

  send(): void {
    window.alert(
      'Your E-Mail is from: ' +
        this.email.from +
        '\r\n' +
        'Your E-Mail is to: ' +
        this.email.to +
        '\r\n' +
        'Your subject: ' +
        this.email.subject +
        '\r\n' +
        'Your message: ' +
        this.email.body
    );
    this.clean();
  }

  clean(): void {
    this.email = { id: 0, from: '', to: '', subject: '', body: '' };
  }
}
