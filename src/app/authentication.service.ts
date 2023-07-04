import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserForAuthenticationDto } from './models/userforauthentication.model';
import { AuthResponseDto } from './models/authresponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private http: HttpClient) {}

  public loginUser(body: UserForAuthenticationDto) {
    return this.http.post<AuthResponseDto>(
      'http://localhost:5126/api/admin/login',
      body
    );
  }
  public getInfo() {
    return this.http.get<string>('http://localhost:5126/api/admin/', {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
}
