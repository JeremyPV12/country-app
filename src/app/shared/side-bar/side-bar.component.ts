import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  imports: [RouterLink,RouterLinkActive],
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
