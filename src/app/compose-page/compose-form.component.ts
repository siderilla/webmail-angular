import { Component, inject } from '@angular/core';
import { ComposeActionService } from '../services/composeActions.service';

@Component({
	selector: 'app-compose-form',
	imports: [],
	templateUrl: './compose-form.component.html',
	styleUrl: './compose-form.component.scss'
})
export class ComposeFormComponent {

	private composeActionsService = inject(ComposeActionService)

	onButtonSend() {
		this.composeActionsService.send();
	}

	onButtonDraft() {
		this.composeActionsService.draft();
	}

	onButtonDiscard() {
		this.composeActionsService.discard();
	}
}
