import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-compose-modal',
	imports: [],
	templateUrl: './compose-modal.component.html',
	styleUrl: './compose-modal.component.scss'
})
export class ComposeModalComponent {

	@Output() close = new EventEmitter<void>()
	
	closeModal() {
		this.close.emit();
	}

}
