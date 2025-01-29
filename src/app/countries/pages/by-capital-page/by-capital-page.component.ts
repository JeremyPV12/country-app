import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
  imports: [SearchBoxComponent]
})
export class ByCapitalPageComponent  {

  searchByCapital(term : string):void{
    console.log('From ByCapitalPage')
    console.log(term)
  }

}
