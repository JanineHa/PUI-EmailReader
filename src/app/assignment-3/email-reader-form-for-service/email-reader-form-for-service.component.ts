import { Component, OnInit, ViewChild } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { Email } from '../../interfaces/email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-reader-form-for-service',
  templateUrl: './email-reader-form-for-service.component.html',
  styleUrls: ['./email-reader-form-for-service.component.sass'],
})
export class EmailReaderFormForServiceComponent implements OnInit {
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
    window.alert(
      'The email ' +
        '"' +
        this.newEmail.subject +
        '"' +
        ' has been sent to ' +
        this.newEmail.to
    );
    this.newEmailList = this.emailService.getEmails();
    this.newId = this.emailService.genId(this.newEmailList);
    this.newEmailList = this.emailService.addToList(this.newId, this.newEmail);
    this.newEmail = { id: 0, from: '', to: '', subject: '', body: undefined };
    this.cleanForm();
  }

  cleanForm(): void {
    this.emailForm.reset();
  }

  selectEmail(index: number): number {
    this.newEmail = this.emailService.getEmail();
    this.newEmail.id = index;
    return this.newEmail.id;
  }

  deleteSelectedEmail(): void {
    var id = this.selectEmail(this.newEmail.id);
    this.newEmailList = this.emailService.deleteFromListId(id);
  }
}
