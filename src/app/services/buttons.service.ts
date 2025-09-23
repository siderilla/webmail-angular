import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ButtonsService {

	private router = inject(Router);

	openCompose() {
		this.router.navigate(['/compose']);
	}

	showSidebar() {
		
	}

}
