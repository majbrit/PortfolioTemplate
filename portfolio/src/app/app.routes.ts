import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ResearchComponent } from './components/research/research.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'publications', component: PublicationsComponent }, 
    { path: 'research', component: ResearchComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/home' } 
];

