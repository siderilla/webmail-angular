import { inject, Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
	providedIn: 'root'
})
export class ComposeActionService {

	private router = inject(Router);
	private modal = inject(ModalService);
	private breakpointObserver = inject(BreakpointObserver);

	isMobile: boolean = false;

	constructor() {
		this.breakpointObserver
		.observe('(max-width: 767px)')
		.subscribe(state => {
			this.isMobile = state.matches;
		});
	}

	send() {
		console.log("Mail sent");
		this.modal.closeModal();
		if (this.isMobile) {
			this.router.navigate(['']);
		}
	}

	draft() {
		console.log("Draft saved");
		this.modal.closeModal();
		if (this.isMobile) {
			this.router.navigate(['']);
		}
	}

	discard() {
		console.log("Mail discarded");
		this.modal.closeModal();
		if (this.isMobile) {
			this.router.navigate(['']);
		}
	}
}
