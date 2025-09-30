import { inject, Injectable } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable({
	providedIn: 'root'
})
export class ComposeActionService {

	private modal = inject(ModalService);

	send() {
		console.log("Mail sent");
		this.modal.closeModal();
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
