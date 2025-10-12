import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  searchText!: string;
  @Output() searchClickedEvent = new EventEmitter<string>();
  onSearchClicked(){
    this.searchClickedEvent.emit(this.searchText);
  }
}
