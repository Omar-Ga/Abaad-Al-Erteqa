import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact.component').then(m => m.ContactComponent)
    },
    { path: '**', redirectTo: '' }
];
