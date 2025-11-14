import { Routes } from '@angular/router';
import { TechnologyItemsList } from './technology-items-list/technology-items-list';
import { TechnologyItemDetails } from './technology-item-details/technology-item-details';

export const routes: Routes = [
    { path: '', redirectTo: 'TechnologyItems', pathMatch: 'full' },
    { path: 'TechnologyItems', component: TechnologyItemsList },
    { path: 'TechnologyItems/:id', component: TechnologyItemDetails }
];
