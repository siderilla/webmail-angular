import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
	selector: 'app-compose-button',
	imports: [RouterModule],
	templateUrl: './compose-button.component.html',
	styleUrl: './compose-button.component.scss'
})
export class ComposeButtonComponent {

	modalService = inject(ModalService);

	onButtonCompose() {
		this.modalService.openModal();
	}

}
