import { Component, OnInit } from '@angular/core';
import { TechnologyItem } from '../core/models/technology-item.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-technology-item-details',
  imports: [CommonModule],
  templateUrl: './technology-item-details.html',
  styleUrl: './technology-item-details.scss'
})
export class TechnologyItemDetails {
  selectedItem$!: Observable<TechnologyItem | undefined>;
  onBack(): void {
    history.back();
  }
}
