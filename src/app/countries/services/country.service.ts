import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interface/country';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CacheStore } from '../interface/cache-store.interface';
import { Region } from '../interface/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl : string = 'https://restcountries.com/v3.1/'

  cacheStore : CacheStore = {
    byCapital   : {term: '' , countries:[] },
    byCountries : {term: '' , countries:[] },
    byRegion    : {region: '' , countries:[] },
  }

  constructor(private http: HttpClient) {
    /* Quiero que se ejecute esto cuando inicializo */
    this.loadFromLocalStorage()
   }

  private saveToLocalStorage():void{
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage():void{
    if (!localStorage.getItem('cacheStore')) return ;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  private getCountriesReques(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError(()=> of([]))
    )
  }



  /* searchContryByAlphaCode(code :string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}capital/${code}`).pipe(
      catchError(() => of([]))
    )
  } */

  searchContryByAlphaCode(code :string):Observable<Country | null >{
    return this.http.get<Country[]>(`${this.apiUrl}capital/${code}`).pipe(
      /* Tranformo la informacion,donde si el arreglos tiene mas de 1, solo regresara el primero, o si no null */
      map(countries => countries.length > 0 ? countries[0] : null ),
      catchError(() => of(null))
    )
  } 


  searchCapital(term : string):Observable<Country[]>{
    /* Operadores de rxjs, tomar ese valor y retornar algo relacionado a ellos (map) */
    // this.http.get<Country[]>(`${this.apiUrl}capital/${term}`).pipe(
      /* Sirve para haacer algo cuando se ejecuta la consulta */
      //tap(countries=> console.log("pase por aqui",countries)),
      /* Transformar la informacion */
      //map(countries=>[])
      /* El of sirve para construir un nuevo observable,basadoe en el arguemento que le mando */
      //catchError(() => of([]))
    //)
    const url = `${this.apiUrl}capital/${term}`
    return this.getCountriesReques(url).pipe(
      tap( countries => this.cacheStore.byCapital = {term,countries}),
      tap(()=> this.saveToLocalStorage())
    )
  }

  searchCountry(term : string):Observable<Country[]>{
    const url = `${this.apiUrl}name/${term}?fulltex=true`
    return this.getCountriesReques(url).pipe(
      tap (countries => this.cacheStore.byCountries = {term,countries}),
      tap(()=> this.saveToLocalStorage())
    )
  }

  searchRegion(region : Region):Observable<Country[]>{
    const url = `${this.apiUrl}region/${region}`
    return this.getCountriesReques(url).pipe(
      tap(countries => this.cacheStore.byRegion = {region, countries}),
      tap(()=> this.saveToLocalStorage())
    )
  }

}
