import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  //Breweries API url
  getBeer() {
    return this._http.get('https://api.openbrewerydb.org/breweries?by_state=california&per_page=50');
  }

}
