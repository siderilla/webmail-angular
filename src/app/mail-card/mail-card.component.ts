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

	// la card visualiza UN messaggio, ergo richiesta di input per UN messaggio
	@Input() message!: MessageDetail;

	// ricevo dal parent il valore di un messaggio SELEZIONATO, se non mi passa nulla resta false
	@Input() isSelected = false;



	// hey parent guarda che qualcosa nella checkbox è cambiato!
	@Output() selectionChanged = new EventEmitter<{ message: MessageDetail, selected: boolean }>();

	// emetto l'evento quando la checkbox cambia
	onCheckboxChange(e: Event) {
		const checked = (e.target as HTMLInputElement).checked;
		this.selectionChanged.emit({ message: this.message, selected: checked });
	}


	
	// hey parent hanno cliccato sulla card da visualizzare
	@Output() viewMessage = new EventEmitter<MessageDetail>(); 

	// emetto l'evento quando la card viene cliccata
	onCardClick() {
		this.viewMessage.emit(this.message);
	}

}
