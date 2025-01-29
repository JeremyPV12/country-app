import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { AboutPageComponent } from './shared/about-page/about-page.component';
import { ContactPageComponent } from './shared/contact-page/contact-page.component';

export const routes: Routes = [
    /* {path: '', component:HomePageComponent},
    {path: 'about-page', component:AboutPageComponent},
    {path: 'contact-page', component:ContactPageComponent}, */
    {
        path: 'countries', 
        loadChildren: () => import('./countries/countries.routes')    
    },
    {path:'**',redirectTo:'countries/by-capital'}
];
