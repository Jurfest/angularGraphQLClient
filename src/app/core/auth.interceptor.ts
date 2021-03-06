import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // TODO: - Handle tokens refreshing, handle error and loading | split in three interceptors?
  constructor(private _router: Router, private _http: HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // TODO: - trocar loginUrl por environment.tokenUrl...
    // Avoid inserting token (and others headers options) in login http requests
    if (request.url !== 'loginUrl' && request.url !== 'revokeToken') {
      // Add authorization and bearer access token
      const accessToken = localStorage.getItem('api-token');
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + accessToken) });

      // Add content-type to headers
      if (!request.headers.has('Content-Type') && !this.isUpload(request)) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }

      // Add accept to headers
      if (!this.isUpload(request)) {
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
      }
    }


    // TODO: - Begin loading
    // this._loading.openLoading(req.url);

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // TODO: - Stop loading
          // this._loading.closeLoading(req.url)
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // TODO: - Stop loading
        // this._loading.closeLoading(req.url)
        this.handleError(error);
        return throwError(error);
      }));
  }

  refreshToken(): Observable<any> {
    // Refresh token
    let params = {
      token: localStorage.getItem('api-token'),
      refreshToken: localStorage.getItem("refreshToken")
    };
    // return this._http.post<any>('localhost:8080/auth/refresh', params);
    return EMPTY;
  }

  handleError(e: any): Observable<any> {
    switch (e.status) {
      case 500:
        this.showMessage('Internal server erro', true);

        break;

      case 401:
        // TODO: - Refresh token
        this.refreshToken();

        break;

      case 400:
        this.showMessage('Erro interno do servidor.', true);

        break;

      case 0:
        this.showMessage('O Sistema perdeu a comunicação com o servidor. <br> Tente novamente em alguns segundos.', true);

        break;


      default:
        break;
    }
    return EMPTY;

  }

  showMessage(msg: string, isError: boolean = false): void {
    console.log(msg, isError ? '. Error!' : '. Warn!');
  }

  isUpload(request: HttpRequest<any>): boolean {
    return request.url.search('upload') !== -1;
  }

}