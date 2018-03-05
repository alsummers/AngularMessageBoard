import { Injectable } from '@angular/core';
import {RegisterUser} from '../models/RegisterUser'
import { Token } from '../models/Token'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs/Subject'

const Api_Url = 'http://kcpelevennoteapie.azurewebsites.net'

@Injectable()
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Register`, regUserData)

  }

  login(loginInfo) {
    const str = 
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`

    return this._http.post(`${Api_Url}/Token`, str).subscribe( (token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true)
      this._router.navigate(['/'])
    })
  }

  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this._http.post(`${Api_Url}/api/Account/Logout`, {headers: this.setHeader()})
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { 
      return new Observable(observer => observer.next(false));
    }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, {headers: this.setHeader()})
  }
  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }

}
