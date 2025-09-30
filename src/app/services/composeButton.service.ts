import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ComposeButtonService {

	private router = inject(Router);
	private breakpointObserver = inject(BreakpointObserver);

	private modalSubject = new BehaviorSubject<boolean>(false);
	isModalVisible$ = this.modalSubject.asObservable();

	openCompose() {
		const isDesktop = this.breakpointObserver.isMatched('(min-width: 768px)');
		if (isDesktop) {
			this.modalSubject.next(true);
		} else {
			this.router.navigate(['/compose']);
		}

	}

}

