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

	@Input() message?: MessageDetail;
	@Output() onMessageSelected = new EventEmitter<{ message: MessageDetail, selected: boolean }>();

}
