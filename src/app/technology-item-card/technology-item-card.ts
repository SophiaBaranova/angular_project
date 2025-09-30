import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyItem } from '../core/models/technology-item.model';

@Component({
  selector: 'app-technology-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-item-card.html',
  styleUrl: './technology-item-card.scss'
})
export class TechnologyItemCard {
  @Input() item!: TechnologyItem;
}
