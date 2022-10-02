import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { EmailReaderBasicComponent } from './assignment-1/email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './assignment-2/email-reader-form/email-reader-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { EmailReaderFormForServiceComponent } from './assignment-3/email-reader-form-for-service/email-reader-form-for-service.component';
import { WithBodyFilterPipe } from './pipes/with-body-filter.pipe';
import { EmailsListComponent } from './assignment-4/emails-list/emails-list.component';
import { EmailFormComponent } from './assignment-4/email-form/email-form.component';
import { EmailViewerComponent } from './assignment-4/email-viewer/email-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent,
    HighlightDirective,
    EmailReaderFormForServiceComponent,
    WithBodyFilterPipe,
    EmailsListComponent,
    EmailFormComponent,
    EmailViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
