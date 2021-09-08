import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root',
})
export class CountryService {

  endPointURL = 'https://covid-api.mmediagroup.fr/v1/cases';

  constructor( private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }

  getCountries(): Promise<Country[]> {
    return this.httpClient
      .get<any>(this.endPointURL)
      .toPromise();
  }

  getCountryByName(name:string): Promise<Country[]> {
    return this.httpClient
      .get<any>(this.endPointURL+"?country="+name)
      .toPromise();
  }

}
