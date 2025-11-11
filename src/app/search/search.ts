import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import { TechnologyItemsService } from '../services/technology-items.service';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }
  onSearch() {
    this.router.navigate(['TechnologyItems'], {
      queryParams: { search: this.searchText },
      queryParamsHandling: "merge"
    });
  }
}
