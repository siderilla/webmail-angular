import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComposeService } from '../services/compose.service';

@Component({
	selector: 'app-compose-button',
	imports: [RouterModule],
	templateUrl: './compose-button.component.html',
	styleUrl: './compose-button.component.scss'
})
export class ComposeButtonComponent {

	composeService = inject(ComposeService);

	onButtonCompose() {
		this.composeService.openCompose();
	}

}
