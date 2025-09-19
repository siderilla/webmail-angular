import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ComposeService {

	private router = inject(Router);

	openCompose() {
		this.router.navigate(['/compose']);
	}

}
