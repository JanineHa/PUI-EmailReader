import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { Email } from '../../interfaces/email';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.sass'],
})
export class EmailViewerComponent implements OnInit {
  email: Email;
  emailList: Email[];
  urlParam?: string | null;
  newIndex: number;
  rightIndex: number;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {
    this.email = { id: 0, from: '', to: '', subject: '', body: undefined };
    this.emailList = [];
    this.urlParam = '';
    this.newIndex = 0;
    this.rightIndex = 0;
  }

  ngOnInit(): void {
    this.emailList = this.emailService.getEmails();
    this.urlParam = this.getUrlValue();
    this.newIndex = Number(this.urlParam);
    this.rightIndex = this.emailService.findIndex(this.newIndex);
  }

  getUrlValue(): string | null {
    this.urlParam = this.route.snapshot.paramMap.get('value');
    return this.urlParam;
  }
}
