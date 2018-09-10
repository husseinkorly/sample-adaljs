import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthService, AuthGuardService, AuthInterceptorService],
  declarations: []
})
export class AuthNModule {}
