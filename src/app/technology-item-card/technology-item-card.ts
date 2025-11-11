import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyItem } from '../core/models/technology-item.model';
import { RouterModule, Router } from '@angular/router';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-technology-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule, HighlightDirective],
  templateUrl: './technology-item-card.html',
  styleUrl: './technology-item-card.scss'
})
export class TechnologyItemCard implements OnInit {
  @Input() item!: TechnologyItem;
  @Input() isRecommended!: boolean;
  itemId: number | undefined;
  router: Router = inject(Router);
  ngOnInit(): void {
    this.itemId = this.item.id;
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
