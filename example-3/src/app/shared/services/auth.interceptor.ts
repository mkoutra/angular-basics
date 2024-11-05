// import { HttpInterceptorFn } from '@angular/common/http';
import {HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable() // @Injectable means that it is visible to all our pages.

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

// Add JWT to the http message sent to backend.

export class authInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = localStorage.getItem('access_token')

      if (!authToken) {
        return next.handle(req)
      }

      const authRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });

      return next.handle(authRequest);
  }
}