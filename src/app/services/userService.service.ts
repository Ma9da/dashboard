import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  email: string;
  name: string;
  gender: string;
  status: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl: string = 'https://gorest.co.in/public/v2/users';
  private tokenKey: string = '0af95b048e8cbfa4c8b1fd3f744f48e668a3777c55f37604aedbd115cb2727db';

  constructor(private http: HttpClient) {}
  createUser(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }
}
