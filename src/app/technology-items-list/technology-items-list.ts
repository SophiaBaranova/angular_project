import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyItem } from '../core/models/technology-item.model';
import { TechnologyItemCard } from '../technology-item-card/technology-item-card';
import {Search} from '../search/search';
import { TechnologyItemsService } from '../services/technology-items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-technology-items-list',
  standalone: true,
  imports: [CommonModule, TechnologyItemCard, Search],
  templateUrl: './technology-items-list.html',
  styleUrl: './technology-items-list.scss',
})
export class TechnologyItemsList implements OnInit {
  items: TechnologyItem[] = [];
  userRole!: 'designer' | 'developer' | 'fullstack';
  searchText!: string;
  subscription: Subscription | undefined;
  constructor(private technologyItemsService: TechnologyItemsService) {}
  ngOnInit(): void {
    this.subscription = this.technologyItemsService.getItems().subscribe({
      next: (item) => {
        this.items = item;
      },
      error: (err) => console.log(err),
      complete: () => console.log('Technology items loaded successfully.')
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  search(searchText: string): void {
    this.searchText = searchText.trim().toLowerCase();
  }
  get filteredItems(): TechnologyItem[] {
    if (!this.searchText) return this.items;
    return this.items.filter(item => item.name.toLowerCase().includes(this.searchText));
  }
  getRecommendedItems(item: TechnologyItem): boolean {
    switch (this.userRole) {
      case 'designer':
        return item.type === 'markup' || item.type === 'style';
      case 'developer':
        return item.type === 'language' || item.type === 'framework';
      default:
        return false;
    }
  }
  showDetails(item: TechnologyItem): void {
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
