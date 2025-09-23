import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonsService } from '../services/buttons.service';

@Component({
	selector: 'app-header-logo-menu',
	imports: [],
	templateUrl: './header-logo-menu.component.html',
	styleUrl: './header-logo-menu.component.scss'
})
export class HeaderLogoMenuComponent {

	private router = inject(Router);
	private buttonsService = inject(ButtonsService)

	onLogoClick() {
		this.router.navigate(['/home']);
	}

	onMenuClick() {
		this.buttonsService.showSidebar()
	}

	// non so se è meglio lasciar gestire questa route a questo componente oppure a un servizio 
	// (come ho fatto per il compose, anche se il compose avrà delle funzioni a parte)

}
