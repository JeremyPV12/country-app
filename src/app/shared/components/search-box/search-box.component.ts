import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txt') tagInput! : ElementRef<HTMLInputElement>;

  @Input()
    placeHolder!: string;

  @Output() valueSearchBox = new EventEmitter<string>();

  sengTerm(){
    const newTag = this.tagInput.nativeElement.value;
    this.valueSearchBox.emit(newTag);
  }

}
