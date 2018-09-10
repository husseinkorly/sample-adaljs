import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthNModule } from './auth-n/auth-n.module';
import { AuthGuardService } from './auth-n/auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
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
