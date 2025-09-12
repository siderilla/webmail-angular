import { Component, Input } from '@angular/core';
import { type MessageDetail } from '../model/message-detail';

@Component({
	selector: 'app-mail-card',
	imports: [],
	templateUrl: './mail-card.component.html',
	styleUrl: './mail-card.component.scss'
})
export class MailCardComponent {

	@Input() message?: MessageDetail;

}
