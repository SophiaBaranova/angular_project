import { Component, OnInit } from '@angular/core';
import { TechnologyItem } from '../core/models/technology-item.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TechnologyItemsService } from '../services/technology-items.service';
import { TimeAgoPipe } from "../pipes/time-ago.pipe";


@Component({
  selector: 'app-technology-item-details',
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './technology-item-details.html',
  styleUrl: './technology-item-details.scss'
})
export class TechnologyItemDetails implements OnInit {
  selectedItem$!: Observable<TechnologyItem | undefined>;
  itemId!: string;
  constructor(
    private technologyItemsService: TechnologyItemsService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.selectedItem$ = this.technologyItemsService.getItemById(this.itemId);
  }
  onBack(): void {
    history.back();
  }
}