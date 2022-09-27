import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReaderFormForServiceComponent } from './email-reader-form-for-service.component';

describe('EmailReaderFormForServiceComponent', () => {
  let component: EmailReaderFormForServiceComponent;
  let fixture: ComponentFixture<EmailReaderFormForServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReaderFormForServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReaderFormForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
