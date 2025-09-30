import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ComposeActionService {

	private router = inject(Router);
	private breakpointObserver = inject(BreakpointObserver);

	private modalSubject = new BehaviorSubject<boolean>(false);
	isModalVisible$ = this.modalSubject.asObservable();


	isMobile() {
		if (this.breakpointObserver.isMatched('(max-width: 768px)')) {
			console.log("Send on desktop → salva in sent");
		} else {
			this.router.navigate(['/home']);
		}
	}


	closeModal() {
		this.modalSubject.next(false);
	}

	saveInSent() {
		console.log("Mail sent and saved in sent folder")
	}

}
