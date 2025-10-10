import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() detailsClickedEvent = new EventEmitter<TechnologyItem>();
  onShowDetails(){
    this.detailsClickedEvent.emit(this.item);
  }
  isNew(): boolean {
    if (!this.item?.lastUpdated) return false;
    const lastUpdated = new Date(this.item.lastUpdated);
    const now = new Date();
    //get difference in ms
    const diffInMs = now.getTime() - lastUpdated.getTime();
    //convert difference into days
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays <= 90;
  }
}
