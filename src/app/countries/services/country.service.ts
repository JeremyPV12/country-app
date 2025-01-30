import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interface/country';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl : string = 'https://restcountries.com/v3.1/'

constructor(private http: HttpClient) { }

  searchCapital(term : string, type : string):Observable<Country[]>{
    /* Operadores de rxjs, tomar ese valor y retornar algo relacionado a ellos (map) */
    return this.http.get<Country[]>(`${this.apiUrl}${type}/${term}`).pipe(
      /* Sirve para haacer algo cuando se ejecuta la consulta */
      //tap(countries=> console.log("pase por aqui",countries)),
      /* Transformar la informacion */
      //map(countries=>[])
      /* El of sirve para construir un nuevo observable,basadoe en el arguemento que le mando */
      catchError(() => of([]))
    )
  }

  searchCountry(term : string, type : string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}${type}/${term}`).pipe(
      catchError(() => of([]))
    )
  }

  searchRegion(term : string, type : string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}${type}/${term}`).pipe(
      catchError(() => of([]))
    )
  }

}
