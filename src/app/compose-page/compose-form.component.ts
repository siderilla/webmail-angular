import { Component, inject } from '@angular/core';
import { ComposeActionService } from '../services/composeActions.service';
import { HeaderPanelComponent } from "../header-container/header-panel.component";
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
	selector: 'app-compose-form',
	imports: [HeaderPanelComponent, CommonModule],
	templateUrl: './compose-form.component.html',
	styleUrl: './compose-form.component.scss'
})
export class ComposeFormComponent {

	private composeActionsService = inject(ComposeActionService);
	private breakpointObserver = inject(BreakpointObserver);

	isMobile$ = this.breakpointObserver.isMatched('(max-width: 768px');

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
