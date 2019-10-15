import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //(fake) server url for sending submitted form 
  _url = 'http://localhost:3000/welcome';

  constructor(private _http: HttpClient) { }

  register(user: User) {
    return this._http.post<any>(this._url, user);
  }

}
