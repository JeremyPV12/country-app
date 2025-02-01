import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CapitalTableComponent } from "../../components/capital-table/capital-table.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country';
import { NgClass } from '@angular/common';
import { Region } from '../../interface/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
  imports: [CapitalTableComponent,NgClass]
})


export class ByRegionPageComponent implements OnInit {



  countries : Country[] = []
  public regions : Region[] = ['Africa','Americas','Asia','Europe','Oceania']; 
  selectedRegion ?: Region

  constructor(private countryService : CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries
    this.selectedRegion = this.countryService.cacheStore.byRegion.region
  }

  searchByRegion(term : Region){
    this.selectedRegion = term
    this.countryService.searchRegion(term).subscribe({
      next: (data) => this.countries = data
    })
  }

}
