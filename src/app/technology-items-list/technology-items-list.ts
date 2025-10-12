import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyItem } from '../core/models/technology-item.model';
import { TechnologyItemCard } from '../technology-item-card/technology-item-card';
import { TECHNOLOGY_ITEMS } from '../mock-data/technology-items';
import {Search} from '../search/search';

@Component({
  selector: 'app-technology-items-list',
  standalone: true,
  imports: [CommonModule, TechnologyItemCard, Search],
  templateUrl: './technology-items-list.html',
  styleUrl: './technology-items-list.scss',
})
export class TechnologyItemsList {
  items: TechnologyItem[] = TECHNOLOGY_ITEMS;
  searchText!: string;
  search(searchText: string){
    this.searchText = searchText.trim().toLowerCase();
  }
  get filteredItems(){
    if (!this.searchText) return this.items;
    return this.items.filter(item => item.name.toLowerCase().includes(this.searchText));
  }
  showDetails(item: TechnologyItem) {
    console.log(
      `Details:
    - Name: ${item.name}
    - Description: ${item.description}
    - Type: ${item.type}
    - Side: ${item.side}
    - Author: ${item.author}
    - Latest version: ${item.latestVersion}
    - Official site: ${item.officialSite}
    - License: ${item.openSource ? 'Open Source' : 'Proprietary'}`
    );
  }
}
