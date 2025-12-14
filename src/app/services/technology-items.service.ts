import { Injectable } from '@angular/core';
import { TechnologyItem } from '../core/models/technology-item.model';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologyItemsService {
  private apiURL = 'items';
  private itemsSubject = new BehaviorSubject<TechnologyItem[]>([]);
  private searchSubject = new BehaviorSubject<string>('');
  public searchSubject$ = this.searchSubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadItems();
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
  getItemById(itemId: string): Observable<TechnologyItem | undefined> {
    return this.items$.pipe(
      map(items => items.find(item => item.id === itemId))
    );
  }
  // Add a new item
  createItem(item: TechnologyItem): void {
    const newItem = {
      ...item,
      logo: this.getLogoUrl(item.logo),
    };
    this.http
    .post<{ name: string }>(`${this.apiURL}.json`, newItem)
    .subscribe({
      next: (res) => {
        const createdItem: TechnologyItem = {
          ...newItem,
          id: res.name,
        };
        const updatedItems = [...this.itemsSubject.value, createdItem];
        this.itemsSubject.next(updatedItems);
      },
      error: (err) => {
        console.error('Failed to create item', err);
      },
    });
  }
  // Load all items from Firebase
  private loadItems(): void {
    this.http
      .get<Record<string, Omit<TechnologyItem, 'id'>>>(`${this.apiURL}.json`)
      .pipe(
        map(data => {
          if (!data) return [];
          return Object.entries(data).map(([key, value]) => ({
            ...value,
            id: key,
            logo: this.getLogoUrl(value.logo)
          }));
        }),
        tap(items => this.itemsSubject.next(items))
      )
      .subscribe({
        error: (err) => console.error('Failed to load items', err)
      });
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