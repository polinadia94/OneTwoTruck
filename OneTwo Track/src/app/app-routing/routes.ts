import { Routes } from '@angular/router';


import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegistrationCorporateComponent } from '../registration-corporate/registration-corporate.component';
import { RegistrationIndividualComponent } from '../registration-individual/registration-individual.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { DataSheetComponent } from '../data-sheet/data-sheet.component';
import { MessagePageComponent } from '../message-page/message-page.component';
import { AboutComponent } from '../about/about.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'corporate', component: RegistrationCorporateComponent },
    { path: 'individual', component: RegistrationIndividualComponent },
    { path: 'search', component: SearchPageComponent },
    { path: 'data', component: DataSheetComponent },
    { path: 'message', component: MessagePageComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];