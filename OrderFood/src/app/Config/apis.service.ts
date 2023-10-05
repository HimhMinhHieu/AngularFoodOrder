import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IFoods } from './home/IFoods';
import { ICates } from './home/ICates';
import { ILogin } from './home/ILogin';

@Injectable({
  providedIn: 'root'
})

export class ApisService {
  private SERVER_CONTEXT: string = "/quanan";
  private SERVER: string = "http://localhost:8080";
  private _url: string = `${this.SERVER}${this.SERVER_CONTEXT}`;
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  constructor(private http: HttpClient) { }

  public getFoods(): Observable<IFoods[]> {
    return this.http.get<IFoods[]>(`${this._url}/api/food/`);
  }
  public getCates(): Observable<ICates[]> {
    return this.http.get<ICates[]>(`${this._url}/api/cates/`);
  }
  login(data: any): Observable<any>{
    return this.http.post(`${this._url}/api/login/`, data);
  }
}

