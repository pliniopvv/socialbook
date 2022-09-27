import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req: HttpRequest<any> = request;
    let token = this.auth.getToken();

    if (token) {
      req = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(req);
  }
}
