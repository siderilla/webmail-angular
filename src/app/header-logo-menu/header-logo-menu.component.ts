import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header-logo-menu',
	imports: [],
	templateUrl: './header-logo-menu.component.html',
	styleUrl: './header-logo-menu.component.scss'
})
export class HeaderLogoMenuComponent {

	private router = inject(Router);

	onLogoClick() {
		this.router.navigate(['/home']);
	}

	onMenuClick() {
		throw new Error('Method not implemented.');
		// forse dovrei davvero fare un servizio a parte. perché la sidebar non è figlia di nessuno lol
		// ovvero si ripresenta il problema di troppi input/output da fare nel caso di questo componente non mi sembra pulito né leggibile
	}

	// non so se è meglio lasciar gestire questa route a questo componente oppure a un servizio 
	// (come ho fatto per il compose, anche se il compose avrà delle funzioni a parte)

}
