import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestManagerService {

  constructor(private http: HttpClient) { }

  public getWithParams(rest: string, controller: string, method: string, values: Map<string, string>) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let params = '';
    values.forEach((value: string, key: string) => {
      if (value !== '' && value !== null) {
        params = params + key + '=' + value + '&';
      }
    });
    console.log(rest + controller + (params !== '' ? '?' : '/') + params)
    return this.http.get(rest + controller + (method !== '' ? '/' : '') + method + (params !== '' ? '?' : '') + params);
  }

  public insertObject(rest: string, controller: string, object: any, values: Map<string, string>) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let params = '';
    values.forEach((value: string, key: string) => {
      if (value !== '' && value !== null) {
        params = params + key + '=' + value + '&';
      }
    });
    console.log()
    return this.http.post(rest + controller + (params !== '' ? '?' : '/') + params, JSON.stringify(object), {headers});
  }
}