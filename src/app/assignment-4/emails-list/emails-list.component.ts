import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from '../../interfaces/email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.sass'],
})
export class EmailsListComponent implements OnInit {
  newEmail: Email;
  newEmailList: Email[];
  newId: number;
  withBodyFilter: boolean;
  term: string;

  @ViewChild('emailForm') emailForm: any;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.newEmail = { id: 0, from: '', to: '', subject: '', body: undefined };
    this.newEmailList = [];
    this.newId = 0;
    this.withBodyFilter = false;
    this.term = '';
  }

  ngOnInit(): void {
    this.newEmailList = this.emailService.getEmails();
  }

  showMailDetails(id: number): Email {
    this.newEmail = this.emailService.getEmail();
    this.newEmail.id = id;
    this.router.navigate(['/assignment-4-viewer/' + this.newEmail.id, {}]);
    return this.newEmail;
  }

  deleteSelectedEmail(index: number): void {
    this.newEmail = this.emailService.getEmail();
    this.newEmail.id = index;
    this.newEmailList = this.emailService.deleteFromListId(index);
    console.log(this.newEmailList);
  }
}
