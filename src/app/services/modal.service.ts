import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ModalService {

	private router = inject(Router);
	private breakpointObserver = inject(BreakpointObserver);

	private modalSubject = new BehaviorSubject<boolean>(false);
	isModalVisible$ = this.modalSubject.asObservable();

	//per evitare che se cambio la viewport mentre è aperta la /compose da mobile a desktop, rimanga su /compose
	constructor() {
		this.breakpointObserver
			.observe('(min-width: 768px)')
			.subscribe(state => {
				const isDesktop = state.matches;

				if (isDesktop && this.router.url === '/compose') {
					this.router.navigate(['']); //per ora reindirizza ma la modale resta chiusa
				}
		});
	}

	openCompose() {
		const isDesktop = this.breakpointObserver.isMatched('(min-width: 768px)');
		if (isDesktop) {
			this.modalSubject.next(true);
		} else {
			this.router.navigate(['/compose']);
		}
	}

	closeModal() {
		this.modalSubject.next(false);
	}

}

