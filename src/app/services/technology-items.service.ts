import { Injectable } from '@angular/core';
import { TechnologyItem } from '../core/models/technology-item.model';
import { TECHNOLOGY_ITEMS } from '../mock-data/technology-items';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyItemsService {
  items: TechnologyItem[] = TECHNOLOGY_ITEMS;
  private itemsSubject = new BehaviorSubject<TechnologyItem[]>(this.items);
  private searchSubject = new BehaviorSubject<string>('');
  public items$ = this.itemsSubject.asObservable();
  public searchSubject$ = this.searchSubject.asObservable();
  setSearchText(searchText: string) {
    this.searchSubject.next(searchText.trim().toLowerCase());
  }
  getFilteredItems(): Observable<TechnologyItem[]> {
    return combineLatest([
      this.items$,
      this.searchSubject$
    ]).pipe(
      map(
        ([items, searchText]) => this.applySearchTextFilter(items, searchText)
      )
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
  getItemById(itemId: number): Observable<TechnologyItem | undefined> {
    return this.getFilteredItems().pipe(
      map(items => items.find(item => item.id === itemId))
    );
  }
}
