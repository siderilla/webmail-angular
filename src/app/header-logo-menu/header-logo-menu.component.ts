import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
	selector: 'app-header-logo-menu',
	imports: [],
	templateUrl: './header-logo-menu.component.html',
	styleUrl: './header-logo-menu.component.scss'
})
export class HeaderLogoMenuComponent {

	private router = inject(Router);
	private menuService = inject(MenuService)

	onLogoClick() {
		this.router.navigate(['/home']);
	}

	onMenuClick() {
		this.menuService.toggleSidebar();
	}

}
