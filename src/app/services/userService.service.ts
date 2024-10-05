import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  provideHttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl: string = 'https://gorest.co.in/public/v2/users';
  private tokenKey: string =
    '0af95b048e8cbfa4c8b1fd3f744f48e668a3777c55f37604aedbd115cb2727db';
  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.tokenKey}`,
  });

  constructor(private http: HttpClient) {}
  createUser(user: Iuser): Observable<Iuser> {
    return this.http.post<any>(this.baseUrl, user, { headers: this.headers });
  }
  getUsersList(): Observable<Array<Iuser>> {
    return this.http.get<Array<Iuser>>(this.baseUrl, { headers: this.headers });
  }
  getUserById(id: number): Observable<Iuser> {
    return this.http.get<Iuser>(`${this.baseUrl}/${id}`, {
      headers: this.headers,
    });
  }
  editUser(id: number | undefined, newValue: Iuser): Observable<Iuser> {
    return this.http.put<Iuser>(`${this.baseUrl}/${id}`, newValue, {
      headers: this.headers,
    });
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.headers });
  }
}
