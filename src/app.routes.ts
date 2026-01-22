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
        loadComponent: () => import('./components/abaad-categories.component').then(m => m.AbaadCategoriesComponent)
    },
    {
        path: 'projects/abaad/:id',
        loadComponent: () => import('./components/abaad-category-detail.component').then(m => m.AbaadCategoryDetailComponent)
    },
    {
        path: 'projects/sama',
        loadComponent: () => import('./components/sama-categories.component').then(m => m.SamaCategoriesComponent)
    },
    {
        path: 'projects/sama/:id',
        loadComponent: () => import('./components/sama-category-detail.component').then(m => m.SamaCategoryDetailComponent)
    },
    { path: '**', redirectTo: '' }
];
