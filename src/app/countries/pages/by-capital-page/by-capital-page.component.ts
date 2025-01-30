import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country';
import { CapitalTableComponent } from "../../components/capital-table/capital-table.component";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
  imports: [SearchBoxComponent, CapitalTableComponent]
})
export class ByCapitalPageComponent {

  countries : Country[] = []

  constructor(private countryService : CountryService){}

  searchByCapital(term : string):void{
    this.countryService.searchCapital(term,'capital').subscribe({
      next:(data)=>{
        this.countries = data
      }
    })
  }

}
