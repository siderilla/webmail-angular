import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Mail } from '../model/mail';
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
	@Input() mail!: Mail;

	// ricevo dal parent il valore di un messaggio SELEZIONATO, se non mi passa nulla resta false
	@Input() isSelected = false;

	@Input() isOpened = false;
	
	// hey parent guarda che qualcosa nella checkbox è cambiato!
	@Output() selectionChanged = new EventEmitter<{ mail: Mail, selected: boolean }>();

	// emetto l'evento quando la checkbox cambia
	onCheckboxChange(e: Event) {
		const checked = (e.target as HTMLInputElement).checked;
		this.selectionChanged.emit({ mail: this.mail, selected: checked });
	}



	// hey parent hanno cliccato sulla card da visualizzare
	@Output() viewMail = new EventEmitter<Mail>();

	// emetto l'evento quando la card viene cliccata
	onCardClick() {
		this.viewMail.emit(this.mail);
	}

}
