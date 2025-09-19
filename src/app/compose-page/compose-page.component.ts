import { Component } from '@angular/core';
import { HeaderPanelComponent } from "../header-panel/header-panel.component";

@Component({
	selector: 'app-compose-page',
	imports: [HeaderPanelComponent],
	templateUrl: './compose-page.component.html',
	styleUrl: './compose-page.component.scss'
})
export class ComposePageComponent {

	

	onButtonDraft() {
		throw new Error('Method not implemented.');
	}



}
