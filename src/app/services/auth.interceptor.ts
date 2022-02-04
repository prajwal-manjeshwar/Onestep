import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonService } from './common.service';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private commonService: CommonService, private _loading: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('req', req.params.get('showLoading'))
    // if (!req.params.get('hideLoading')) {
    //   this._loading.setLoading(true, req.url);
    // }
    const currentAuthToken = localStorage.getItem("access_token");
    // console.log("222=>",currentAuthToken);
    const headers = {};
    if (currentAuthToken && currentAuthToken != "") {
      headers['Authorization'] = `Bearer ${currentAuthToken}`;
      headers['Content-Type'] = 'application/json';
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT'
    }
    else {
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT'
    }
    if (req.url.includes('https://login.microsoftonline.com')) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    req = req.clone({
      setHeaders: headers
    });


    return next.handle(req).pipe(catchError((err: any) => {
      // console.log('error', err)
      if (!this.commonService.onlineStatus) {
        this.commonService.showToast('No internet connection')
      }
      // this._loading.setLoading(false, req.url);
      if (err.status === 401) {
        //if 401 response returned from api
        //  localStorage.setItem("access_token",null);
        // localStorage.removeItem('access_token')
        // this.commonService.getToken();
        // const currentAuthToken = localStorage.getItem("access_token");
        // const headers ={};
        //   headers['Authorization']=`Bearer ${currentAuthToken}`;
        //   headers['Content-Type'] = 'application/json';
        //   headers['Access-Control-Allow-Origin'] =  '*'
        //   headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT'
        // req = req.clone({
        //     setHeaders: headers
        // });
      }
      return throwError(err);
    })
    ).pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
      if (evt instanceof HttpResponse) {
        // this._loading.setLoading(false, req.url);
      }
      return evt;
    }));
  }

}