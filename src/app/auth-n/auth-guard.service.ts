import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) {}

  public canActivate(): boolean {
    if (!environment.authentication) {
      return true;
    }
    if (!this.authService.isAuthenticated()) {
      this.authService.context.login();

      return false;
    }

    return true;
  }
}
