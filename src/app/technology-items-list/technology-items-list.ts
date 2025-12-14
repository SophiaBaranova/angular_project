import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyItem } from '../core/models/technology-item.model';
import { TechnologyItemCard } from '../technology-item-card/technology-item-card';
import { Search } from '../search/search';
import { TechnologyItemsService } from '../services/technology-items.service/technology-items.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-technology-items-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TechnologyItemCard, Search],
  templateUrl: './technology-items-list.html',
  styleUrl: './technology-items-list.scss',
})
export class TechnologyItemsList implements OnInit {
  items$: Observable<TechnologyItem[]> | undefined;
  searchText: string = '';
  userRole!: 'designer' | 'developer' | 'fullstack';
  subscription: Subscription | undefined;
  constructor(private technologyItemsService: TechnologyItemsService,
    private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.searchText = params.get('search') || '';
      this.technologyItemsService.setSearchText(this.searchText);
    });
    this.items$ = this.technologyItemsService.getFilteredItems();
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
}