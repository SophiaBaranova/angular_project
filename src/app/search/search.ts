import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import { TechnologyItemsService } from '../services/technology-items.service';

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
  searchText: string = '';
  constructor(private technologyItemsService: TechnologyItemsService) {}
  setSearchText() {
    this.technologyItemsService.setSearchText(this.searchText);
  }
}
