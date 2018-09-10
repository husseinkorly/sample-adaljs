import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import * as AuthenticationContext from 'adal-angular';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class AuthService {
  private _config: any;
  private _context: AuthenticationContext;

  constructor() {
    this._config = environment.adalConfig;
    this._context = new AuthenticationContext(this._config);
  }

  get config(): any {
    return this._config;
  }

  get context(): AuthenticationContext {
    return this._context;
  }

  public isAuthenticated(): boolean {
    return (
      !!this._context.getCachedUser() &&
      !!this._context.getCachedToken(this._config.clientId)
    );
  }

  public acquireToken(res: any): any {
    return new Observable<any>((subscriber: Subscriber<any>) =>
      this._context.acquireToken(res, (message: string, token: string) => {
        if (message) {
          subscriber.error(
            new HttpErrorResponse({
              error: message,
              headers: null,
              status: 401,
              statusText: 'Error from AAD',
              url: res
            })
          );
        }
        subscriber.next(token);
      })
    );
  }

  public getUser(): any {
    return new Observable<any>((subscriber: Subscriber<any>) =>
      this._context.getUser(
        (message: string, user: { userName: string; profile: any }) => {
          if (message) {
            subscriber.error(message);
          }
          subscriber.next(user);
        }
      )
    );
  }
}
