import { Component, OnInit } from '@angular/core';
import { AlertNobodyComponent } from "../../components/alert-nobody/alert-nobody.component";
import { CountryService } from '../../services/country.service';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CapitalTableComponent } from "../../components/capital-table/capital-table.component";
import { Country } from '../../interface/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css'],
  imports: [ SearchBoxComponent, CapitalTableComponent]
})
export class ByCountryPageComponent implements OnInit {

  countries : Country[] = []
  dynamicValue : string = ''

  constructor(private countryService : CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.dynamicValue = this.countryService.cacheStore.byCountries.term;
    console.log(
      this.countries = this.countryService.cacheStore.byCountries.countries,
      this.dynamicValue = this.countryService.cacheStore.byCountries.term
    )
  }

  searchByCountry(term : string):void{
    this.countryService.searchCountry(term).subscribe({
      next: (data) => this.countries = data
    })
  }

}
