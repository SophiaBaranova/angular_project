import { Injectable } from '@angular/core';
import { TechnologyItem } from '../core/models/technology-item.model';
import { TECHNOLOGY_ITEMS } from '../mock-data/technology-items';

@Injectable({
  providedIn: 'root'
})
export class TechnologyItemsService {
  items: TechnologyItem[] = TECHNOLOGY_ITEMS;
  getItems() {
    return this.items;
  }
}
