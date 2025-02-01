import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  /* Tubo de agua */
  /* Es un tipo especial de observable */
  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSuscription ?: Subscription;

  @ViewChild('txt') tagInput! : ElementRef<HTMLInputElement>;

  @Input()
    placeHolder!: string;

  @Input() valuerecibe = ''

  @Output() valueSearchBox = new EventEmitter<string>();

  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe( value => {
      this.onDebounce.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  sengTerm(){
    const newTag = this.tagInput.nativeElement.value;
    this.valueSearchBox.emit(newTag);
    this.tagInput.nativeElement.value = ''
  }

  onKeyPress(searchTerm:string){
   /*  console.log(searchTerm) */
   this.debouncer.next(searchTerm)
  }

}
