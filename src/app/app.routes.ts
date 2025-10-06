import { Routes } from '@angular/router';
import { ComposeFormComponent } from './compose-form/compose-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

	{ path: 'compose', component: ComposeFormComponent},
	{ path: '', component: HomeComponent},
	{ path: 'home', component: HomeComponent }

];
