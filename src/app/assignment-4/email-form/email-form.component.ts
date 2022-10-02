import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../../interfaces/email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.sass'],
})
export class EmailFormComponent implements OnInit {
  newEmail: Email;
  newEmailList: Email[];
  newId: number;
  withBodyFilter: boolean;
  term: string;

  @ViewChild('emailForm') emailForm: any;

  constructor(private emailService: EmailService) {
    this.newEmail = { id: 0, from: '', to: '', subject: '', body: undefined };
    this.newEmailList = [];
    this.newId = 0;
    this.withBodyFilter = false;
    this.term = '';
  }

  ngOnInit(): void {
    this.newEmailList = this.emailService.getEmails();
  }

  sendForm(): void {
    this.newEmailList = this.emailService.getEmails();
    this.newId = this.emailService.genId(this.newEmailList);
    console.log('generated ID: ' + this.newId);
    this.newEmailList = this.emailService.addToList(this.newId, this.newEmail);
    this.newEmail = { id: 0, from: '', to: '', subject: '', body: undefined };
    console.log('Liste:' + this.newEmailList);
    this.cleanForm();
  }

  cleanForm(): void {
    this.emailForm.reset();
  }
}
