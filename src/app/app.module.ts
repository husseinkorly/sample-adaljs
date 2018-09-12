import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthNModule } from './auth-n/auth-n.module';
import { AuthGuardService } from './auth-n/auth-guard.service';
import { UploadModule } from '@progress/kendo-angular-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [AppComponent, UploadComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UploadModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthNModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        canActivate: [AuthGuardService]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
