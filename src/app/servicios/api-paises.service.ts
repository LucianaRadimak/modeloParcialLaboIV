import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

constructor(private http: HttpClient) { }

getCountries(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map(countries => 
      countries.map(country => ({
        name: country.translations.spa.common,
        flag: country.flags.svg,
      }))
    )
  );
}
}
