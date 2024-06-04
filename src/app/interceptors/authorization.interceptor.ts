import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from "../../environments/environment";

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const requestWithAuthorization = req.clone({
    headers: req.headers.set('Authorization', `${environment.token}`),
  });
  return next(requestWithAuthorization);
};
