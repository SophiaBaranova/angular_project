import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

export const baseUrlInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const baseUrl = 'https://web-development-b3bc2-default-rtdb.firebaseio.com';

  // Prepend base URL if URL is relative
  const apiReq = req.url.startsWith('http')
    ? req
    : req.clone({ url: `${baseUrl}/${req.url}` });

  return next(apiReq).pipe(
    catchError(err => {
      console.error('HTTP Error:', err);
      return throwError(() => err);
    })
  );
};