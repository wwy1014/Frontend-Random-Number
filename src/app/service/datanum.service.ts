import {Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatanumService {

  private API_URL=environment.API_URL;

  tokenVal = localStorage.getItem('token');
  header = new HttpHeaders({
    'Authorization' : `Bearer ${this.tokenVal}`,
  });


  constructor(private httpRequest:HttpClient) { }

  savenumber(finalValue: any) {
    return this.httpRequest.post(this.API_URL + 'api/savenumber', finalValue);
    
  }

}