import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country';
import { CapitalTableComponent } from "../../components/capital-table/capital-table.component";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
  imports: [SearchBoxComponent, CapitalTableComponent, LoadingComponent,NgIf]
})
export class ByCapitalPageComponent implements OnInit {

  countries : Country[] = []
  isLoading : boolean = false
  dynamicValue :string = ''
  
  constructor(private countryService : CountryService){}
  
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.dynamicValue = this.countryService.cacheStore.byCapital.term;

  }

  searchByCapital(term : string):void{
    this.isLoading = true
    this.countryService.searchCapital(term).subscribe({
      next:(data)=>{
        this.countries = data
        this.isLoading = false
      }
    })
  }

}
