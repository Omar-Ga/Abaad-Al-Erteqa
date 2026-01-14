import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'projects/abaad',
        loadComponent: () => import('./components/sama-categories.component').then(m => m.SamaCategoriesComponent)
    },
    {
        path: 'projects/abaad/:id',
        loadComponent: () => import('./components/sama-category-detail.component').then(m => m.SamaCategoryDetailComponent)
    },
    { path: '**', redirectTo: '' }
];
