import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { SharedService } from '../shared/services';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private sharedService: SharedService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (this.sharedService.getAuthorizationToken() !== null) {
      const authToken = this.sharedService.getAuthorizationToken();
      const authReq = req.clone({ setHeaders: { Authorization: 'TOKEN ' + authToken } });
      return next.handle(authReq).pipe(
        catchError(error => {
          if (error.status === 401) {
            this.sharedService.logout();
            location.reload();
          }
          return throwError(error);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
