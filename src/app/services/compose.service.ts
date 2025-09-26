import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';


@Injectable({
	providedIn: 'root'
})
export class ComposeService {

	private router = inject(Router);
	private breakpointObserver = inject(BreakpointObserver);
	isModalVisible = false;

	openCompose() {
		const isDesktop = this.breakpointObserver.isMatched('(min-width: 768px)');
		if (isDesktop) {
			this.showModal();
		} else {
			this.router.navigate(['/compose']);
		}
		
	}

	showModal() {
		this.isModalVisible = true;
	}

	hideModal() {
		this.isModalVisible = false;
	}


}

