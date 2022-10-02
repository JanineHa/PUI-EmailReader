import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './assignment-1/email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './assignment-2/email-reader-form/email-reader-form.component';
import { EmailReaderFormForServiceComponent } from './assignment-3/email-reader-form-for-service/email-reader-form-for-service.component';
import { EmailsListComponent } from './assignment-4/emails-list/emails-list.component';
import { EmailFormComponent } from './assignment-4/email-form/email-form.component';
import { EmailViewerComponent } from './assignment-4/email-viewer/email-viewer.component';

const routes: Routes = [
  { path: 'assignment-1', component: EmailReaderBasicComponent },
  { path: 'assignment-2', component: EmailReaderFormComponent },
  {
    path: 'assignment-3',
    component: EmailReaderFormForServiceComponent,
  },
  { path: 'assignment-4-form', component: EmailFormComponent },
  { path: 'assignment-4-list', component: EmailsListComponent },
  { path: 'assignment-4-viewer/:value', component: EmailViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']); // when the URL does not match redirect to initial default route
    };
  }
}
