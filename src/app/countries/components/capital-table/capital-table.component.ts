import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country';
import { DecimalPipe, NgIf } from '@angular/common';
import { AlertNobodyComponent } from "../alert-nobody/alert-nobody.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'countries-capital-table',
  imports: [NgIf, DecimalPipe, AlertNobodyComponent,RouterLink],
  templateUrl: './capital-table.component.html',
  styleUrls: ['./capital-table.component.css']
})
export class CapitalTableComponent {

  @Input() countries : Country[] = []

}
