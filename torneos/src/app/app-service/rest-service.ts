import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestManagerService {

  constructor(private http: HttpClient) { }

  public getWithParamsWithHeader(rest: string, controller: string, method: string, values: Map<string, string>) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2I2NTc0YTQ4YjQ4NzU0YjIwN2MyZDg4NjRiOTMxN2U2ZDc5MGJlNDM0YTE2MTFmYzBmMTA1NDEzNTlhYmQzN2MzYmQxMDEwMWU5M2I4N2QiLCJpYXQiOjE2MDQ3NTU0ODEsIm5iZiI6MTYwNDc1NTQ4MSwiZXhwIjoxNjM2MjkxNDgxLCJzdWIiOiIiLCJzY29wZXMiOlsiZGFkb3MudGlyYXIiLCJ1c3Vhcmlvcy5sb2dpbiIsInVzdWFyaW9zLmp1Z2Fkb3Jlcy5nZXQiLCJ1c3Vhcmlvcy5qdWdhZG9yZXMucG9zdCIsInVzdWFyaW9zLmp1Z2Fkb3Jlcy5wdXQiLCJqdWVnb3MuZ2VuZXJhciIsImp1ZWdvcy5zaW11bGFyIiwidG9ybmVvcy5wYXJ0aWRhLmdldCJdfQ.PrKbL8WqWmg85OcsBXcqOWhk9mM7qnWCVXXyXzVaoqif1f01EkdAnq5mSR-OkZmxiuDCmtK5QalbTgQWbAbWXnrgbZLef1bszafxrIniLYvzxLI04dMZsdKiUQjnqnNlPfqH0lNNlgUo0ZhLmQqSNuBwvQTzY0_BWaB4dJeZMgXxJRuZVD68Vnsd3nWYcc9-Vwm9PM-FOsqy_Uff9PwRXfFUSdvxT4ktBl_llAQmJrt5WR6lk-K5KoyT0Tm5Lbo4ImJYPnO0lLeSY3Te2lWwssK8lmIKx3PxT2blAbS1qzK_7WRnQpTZkABYjdFrudmilCI5lZ7sZsS-Sm5XwYzS8o6UgNdMpCZJ4fk3ppJo8PN_IV9Mh3623zdPCJT-pMOUmmwD5jcWdhzRwIxViS77xE1-Nmn976nhrbfxi1cVG-5hk4pJsD33rxfy0JzIYLXm9sM0Hd7_Z3B_xUpbzo3clTzLUhBuPxrUC0yMUCBVnwF6K_5-DkmswfTkF_rcc9K0uedZtTVEWYuky1EPTg-jSxrZsAFBzwo8Hy26P1xJ2s6FGIeNjLBiCmVCfB7TFtYE2XzFJytC6_qvXI1YI5KhFs5iX3wBk90J4y-J0LX2vfsGdv1N1_7Ij9j3tDv3PnzxFBhai3KgUvrtGLmpGb95NsjDI247ZTSzcnu1lSV2qAc'
    });

    let params = '';
    values.forEach((value: string, key: string) => {
      if (value !== '' && value !== null) {
        params = params + key + '=' + value + '&';
      }
    });
    console.log(rest + controller + (params !== '' ? '?' : '/') + params)
    return this.http.get(rest + controller + (method !== '' ? '/' : '') + method + (params !== '' ? '?' : '') + params,{headers});
  }

  public getWithParamsWithOutHeader(rest: string, controller: string, method: string, values: Map<string, string>) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2I2NTc0YTQ4YjQ4NzU0YjIwN2MyZDg4NjRiOTMxN2U2ZDc5MGJlNDM0YTE2MTFmYzBmMTA1NDEzNTlhYmQzN2MzYmQxMDEwMWU5M2I4N2QiLCJpYXQiOjE2MDQ3NTU0ODEsIm5iZiI6MTYwNDc1NTQ4MSwiZXhwIjoxNjM2MjkxNDgxLCJzdWIiOiIiLCJzY29wZXMiOlsiZGFkb3MudGlyYXIiLCJ1c3Vhcmlvcy5sb2dpbiIsInVzdWFyaW9zLmp1Z2Fkb3Jlcy5nZXQiLCJ1c3Vhcmlvcy5qdWdhZG9yZXMucG9zdCIsInVzdWFyaW9zLmp1Z2Fkb3Jlcy5wdXQiLCJqdWVnb3MuZ2VuZXJhciIsImp1ZWdvcy5zaW11bGFyIiwidG9ybmVvcy5wYXJ0aWRhLmdldCJdfQ.PrKbL8WqWmg85OcsBXcqOWhk9mM7qnWCVXXyXzVaoqif1f01EkdAnq5mSR-OkZmxiuDCmtK5QalbTgQWbAbWXnrgbZLef1bszafxrIniLYvzxLI04dMZsdKiUQjnqnNlPfqH0lNNlgUo0ZhLmQqSNuBwvQTzY0_BWaB4dJeZMgXxJRuZVD68Vnsd3nWYcc9-Vwm9PM-FOsqy_Uff9PwRXfFUSdvxT4ktBl_llAQmJrt5WR6lk-K5KoyT0Tm5Lbo4ImJYPnO0lLeSY3Te2lWwssK8lmIKx3PxT2blAbS1qzK_7WRnQpTZkABYjdFrudmilCI5lZ7sZsS-Sm5XwYzS8o6UgNdMpCZJ4fk3ppJo8PN_IV9Mh3623zdPCJT-pMOUmmwD5jcWdhzRwIxViS77xE1-Nmn976nhrbfxi1cVG-5hk4pJsD33rxfy0JzIYLXm9sM0Hd7_Z3B_xUpbzo3clTzLUhBuPxrUC0yMUCBVnwF6K_5-DkmswfTkF_rcc9K0uedZtTVEWYuky1EPTg-jSxrZsAFBzwo8Hy26P1xJ2s6FGIeNjLBiCmVCfB7TFtYE2XzFJytC6_qvXI1YI5KhFs5iX3wBk90J4y-J0LX2vfsGdv1N1_7Ij9j3tDv3PnzxFBhai3KgUvrtGLmpGb95NsjDI247ZTSzcnu1lSV2qAc'
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