import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyItem } from '../core/models/technology-item.model';
import { TechnologyItemCard } from '../technology-item-card/technology-item-card';
import { TECHNOLOGY_ITEMS } from '../mock-data/technology-items';

@Component({
  selector: 'app-technology-items-list',
  standalone: true,
  imports: [CommonModule, TechnologyItemCard],
  templateUrl: './technology-items-list.html',
  styleUrl: './technology-items-list.scss',
})
export class TechnologyItemsList {
  items: TechnologyItem[] = TECHNOLOGY_ITEMS;
}
