import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComposeButtonService } from '../services/composeButton.service';

@Component({
	selector: 'app-compose-button',
	imports: [RouterModule],
	templateUrl: './compose-button.component.html',
	styleUrl: './compose-button.component.scss'
})
export class ComposeButtonComponent {

	composeButtonService = inject(ComposeButtonService);

	onButtonCompose() {
		this.composeButtonService.openCompose();
	}

}
