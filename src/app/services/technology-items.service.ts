import { Injectable } from '@angular/core';
import { TechnologyItem } from '../core/models/technology-item.model';
import { TECHNOLOGY_ITEMS } from '../mock-data/technology-items';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyItemsService {
  private itemsSubject: BehaviorSubject<TechnologyItem[]>;
  private searchSubject = new BehaviorSubject<string>('');
  public searchSubject$ = this.searchSubject.asObservable();
  constructor() {
    // Load items from localStorage or fallback to mock data
    const savedItems = localStorage.getItem('technologyItems');
    const initialItems: TechnologyItem[] = savedItems
    ? JSON.parse(savedItems) as TechnologyItem[]
    : TECHNOLOGY_ITEMS;
    // Normalize logos
    const normalizedItems = initialItems.map(item => ({
      ...item,
      logo: this.getLogoUrl(item.logo)
    }));
    this.itemsSubject = new BehaviorSubject<TechnologyItem[]>(normalizedItems);
  }
  // Observable of all items
  get items$(): Observable<TechnologyItem[]> {
    return this.itemsSubject.asObservable();
  }
  // Update search text
  setSearchText(searchText: string) {
    this.searchSubject.next(searchText.trim().toLowerCase());
  }
  // Return filtered items based on search
  getFilteredItems(): Observable<TechnologyItem[]> {
    return combineLatest([this.items$, this.searchSubject$]).pipe(
      map(([items, searchText]) => this.applySearchTextFilter(items, searchText))
    );
  }
  private applySearchTextFilter(items: TechnologyItem[], searchText: string) {
    if (searchText) {
      return items.filter(item =>
        item.name.toLowerCase().includes(searchText.trim().toLowerCase())
      );
    }
    return items;
  }
  // Find item by ID
  getItemById(itemId: number): Observable<TechnologyItem | undefined> {
    return this.getFilteredItems().pipe(
      map(items => items.find(item => item.id === itemId))
    );
  }
  // Add a new item
  createItem(item: TechnologyItem): void {
    const items = this.itemsSubject.value;
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const newItem = { ...item, id: newId, logo: this.getLogoUrl(item.logo) };
    const updatedItems = [...items, newItem];
    // Update BehaviorSubject
    this.itemsSubject.next(updatedItems);
    // Persist to localStorage
    localStorage.setItem('technologyItems', JSON.stringify(updatedItems));
  }
  // Convert logo to full URL if needed
  private getLogoUrl(logo: string): string {
    if (!logo) return 'assets/default-logo.png'; // fallback if empty
    if (logo.startsWith('http://') || logo.startsWith('https://')) {
      return logo;
    }
    return 'assets/' + logo;
  }
}