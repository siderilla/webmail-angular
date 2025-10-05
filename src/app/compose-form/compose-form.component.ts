import { Component, inject } from '@angular/core';
import { ComposeService } from '../services/compose.service';
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

	private composeService = inject(ComposeService);
	private breakpointObserver = inject(BreakpointObserver);

	isMobile$ = this.breakpointObserver.isMatched('(max-width: 768px');

	onButtonSend() {
		this.composeService.send();
	}

	onButtonDraft() {
		this.composeService.draft();
	}

	onButtonDiscard() {
		this.composeService.discard();
	}
}
