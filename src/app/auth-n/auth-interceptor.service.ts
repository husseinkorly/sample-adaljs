import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqUrl = environment.apiUrl;
    if (req.url === reqUrl) {
      return this.authService.acquireToken(reqUrl).mergeMap(token => {
        const request: HttpRequest<any> = req.clone({
          setHeaders: { Authorization: 'Bearer ' + token }
        });

        return next.handle(request);
      });
    }

    return next.handle(req);
  }
}
