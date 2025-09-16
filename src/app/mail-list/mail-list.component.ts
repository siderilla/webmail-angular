import { Component, NgModule, Input, EventEmitter, Output } from '@angular/core';
import { NavActionsComponent } from '../nav-actions/nav-actions.component';
import { MailCardComponent } from '../mail-card/mail-card.component';
import { type MessageDetail } from '../model/message-detail';
import { CommonModule } from '@angular/common';
import { OutletContext } from '@angular/router';

@Component({
	selector: 'app-mail-list',
	imports: [NavActionsComponent, MailCardComponent, CommonModule],
	templateUrl: './mail-list.component.html',
	styleUrl: './mail-list.component.scss'
})
export class MailListComponent {

	private selectedMessages: MessageDetail[] = [];
	selected?: MessageDetail;


	@Input() messages: MessageDetail[] = [];

	@Output() selectionChanged = new EventEmitter<MessageDetail[]>();

	@Output() view = new EventEmitter<MessageDetail>();

	onView(message: MessageDetail) {
		this.selected = message;
		this.view.emit(message); // rilancia l'evento al parent (MailViewer)
	}

	isSelected(m: MessageDetail): boolean {
		return this.selectedMessages.includes(m);
	}

	onSelected(event: { message: MessageDetail; selected: boolean }) {
		if (event.selected) {
			this.selectedMessages.push(event.message);
		} else {
			this.selectedMessages = this.selectedMessages.filter(m => m !== event.message);
		}
		this.selectionChanged.emit(this.selectedMessages);
	}
}
