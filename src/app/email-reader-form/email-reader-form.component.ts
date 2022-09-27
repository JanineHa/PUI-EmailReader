import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.sass'],
})
export class EmailReaderFormComponent implements OnInit {
  email: Email;
  emailList: Email[];

  @ViewChild('emailForm') emailForm: any;

  constructor() {
    this.email = { id: 0, from: '', to: '', subject: '', body: '' };
    this.emailList = [];
  }

  ngOnInit(): void {}

  sendForm(): void {
    window.alert(
      'The email ' +
        '"' +
        this.email.subject +
        '"' +
        ' has been sent to ' +
        this.email.to
    );
    this.emailList.push(this.email);
    //console.log(this.emailList);
    this.email = { id: 0, from: '', to: '', subject: '', body: '' };
    this.cleanForm();
  }

  cleanForm(): void {
    this.emailForm.reset();
  }
}
