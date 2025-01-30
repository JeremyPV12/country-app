import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country';
import { DecimalPipe, NgIf } from '@angular/common';

@Component({
  selector: 'countries-capital-table',
  imports:[NgIf,DecimalPipe],
  templateUrl: './capital-table.component.html',
  styleUrls: ['./capital-table.component.css']
})
export class CapitalTableComponent {

  @Input() countries : Country[] = []

}
