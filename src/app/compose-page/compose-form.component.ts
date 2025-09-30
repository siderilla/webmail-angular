import { Component } from '@angular/core';

@Component({
	selector: 'app-compose-form',
	imports: [],
	templateUrl: './compose-form.component.html',
	styleUrl: './compose-form.component.scss'
})
export class ComposeFormComponent {

	onButtonDraft() {
		console.log('Save as draft');
	}

}
