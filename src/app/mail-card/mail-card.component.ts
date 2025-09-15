import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type MessageDetail } from '../model/message-detail';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-mail-card',
	imports: [DatePipe],
	templateUrl: './mail-card.component.html',
	styleUrl: './mail-card.component.scss'
})
export class MailCardComponent {

	@Input() message!: MessageDetail;
	@Input() selected = false;

	@Output() active = new EventEmitter<{ message: MessageDetail, selected: boolean }>();

	onCheckboxChange(e: Event) {
		const checked = (e.target as HTMLInputElement).checked;
		this.active.emit({ message: this.message, selected: checked })
	}
}
