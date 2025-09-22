import { Routes } from '@angular/router';
import { ComposePageComponent } from './compose-page/compose-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

	{ path: 'compose', component: ComposePageComponent},
	{ path: '', component: HomeComponent},
	{ path: 'home', component: HomeComponent }

];
