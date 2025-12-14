import { Routes } from '@angular/router';
import { TechnologyItemsList } from './technology-items-list/technology-items-list';
import { TechnologyItemDetails } from './technology-item-details/technology-item-details';
import { TechnologyItemForm } from './forms/technology-item-form/technology-item-form';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'TechnologyItems', pathMatch: 'full' },
    { path: 'TechnologyItems', component: TechnologyItemsList, canActivate: [AuthGuard] },
    { path: 'TechnologyItems/create', component: TechnologyItemForm, canActivate: [AuthGuard] },
    { path: 'TechnologyItems/:id', component: TechnologyItemDetails, canActivate: [AuthGuard] },
];
