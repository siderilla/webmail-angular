import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type MessageDetail } from '../model/message-detail';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
	selector: 'app-mail-card',
	imports: [DatePipe, CommonModule],
	templateUrl: './mail-card.component.html',
	styleUrl: './mail-card.component.scss'
})
export class MailCardComponent {

	changeColor: boolean = false;

	@Input() message!: MessageDetail;

	// ricevo dal parent il valore di selected, se non mi passa nulla resta false
	@Input() selected = false;

	// output per la spunta alla checkbox
	@Output() active = new EventEmitter<{ message: MessageDetail, selected: boolean }>();

	// output solo per la visualizzazione
	@Output() view = new EventEmitter<MessageDetail>(); 

	onCheckboxChange(e: Event) {
		const checked = (e.target as HTMLInputElement).checked;
		this.active.emit({ message: this.message, selected: checked });
	}

	toggleView() {
		this.view.emit(this.message);
	}

}
