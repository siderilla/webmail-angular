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

	// ricevo dal parent un array di messaggi
	@Input() messages: MessageDetail[] = [];



	// hey parent guarda che la selezione del messaggio è cambiata!
	@Output() selectionChanged = new EventEmitter<MessageDetail[]>();

	// emetto l'evento quando i messaggi sono selezionati con popolamento dell'array
	onSelected(event: { message: MessageDetail; selected: boolean }) {
		if (event.selected) {
			this.selectedMessages.push(event.message);
		} else {
			this.selectedMessages = this.selectedMessages.filter(m => m !== event.message);
		}
		this.selectionChanged.emit(this.selectedMessages);
	}

	// hey parent hanno cliccato sulla card da visualizzare
	@Output() viewMessage = new EventEmitter<MessageDetail>();

	// rimbalzo l'evento della card cliccata per esser visualizzata al parent
	onView(message: MessageDetail) {
		this.selected = message;
		this.viewMessage.emit(message);
	}

	// ritorna true se il messaggio m è già presente nell'array dei selezionati e quindi se la checkbox deve essere spuntata
	isSelected(m: MessageDetail): boolean {
		return this.selectedMessages.includes(m);
	}

}
