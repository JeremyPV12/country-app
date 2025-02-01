import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country';
import { switchMap } from 'rxjs';
import { DecimalPipe, NgIf } from '@angular/common';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  imports: [NgIf,DecimalPipe],
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  country ?: Country
  nosenada : any[] = []

  constructor(
    private activateRoute : ActivatedRoute,
    private countriesService : CountryService,
    private router : Router
  ) { }

  /* ngOnInit() {
    this.activateRoute.params.subscribe(({id})=>{
      this.countriesService.searchContryByAlphaCode(id).subscribe({
        next: (data) => console.log(data)
      })
    })
  } */

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id})=> this.countriesService.searchContryByAlphaCode(id) )
      )
      .subscribe(country => {
        if(!country) return this.router.navigateByUrl('')
        this.nosenada = Object.entries(country.translations).map(([lang, values]) => ({
          lang,
          official: values.official,
          common: values.common
        }));
        return this.country = country;
      })
  }

}
