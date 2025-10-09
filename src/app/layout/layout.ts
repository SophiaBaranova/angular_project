import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TechnologyItemsList } from '../technology-items-list/technology-items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TechnologyItemsList],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  appName = 'Web Development';
}
