import { inject, Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})
export class ComposeActionService {

	private router = inject(Router);
	private modal = inject(ModalService);

	private modalSubject = new BehaviorSubject<boolean>(false);
	isModalVisible$ = this.modalSubject.asObservable();

	send() {
		console.log("Mail sent");
		if (this.isModalVisible$) {
			this.modal.closeModal();
		} else {
			this.router.navigate(['/']);
		}
	}

	draft() {
		console.log("Draft saved");
		this.modal.closeModal();
	}

	discard() {
		console.log("Mail discarded");
		this.modal.closeModal();
	}
}
