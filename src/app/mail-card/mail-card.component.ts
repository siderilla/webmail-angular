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

	@Input() mail!: Mail; // richiesta di input per una mail
	@Input() isSelected = false; 
	@Input() isOpened = false;

	@Output() selectionChanged = new EventEmitter<{ mail: Mail, selected: boolean }>(); // hey parent guarda che qualcosa nella checkbox è cambiato!
	@Output() viewMail = new EventEmitter<Mail>(); // hey parent hanno cliccato sulla card da visualizzare

	
	// emetto l'evento quando la checkbox cambia
	onCheckboxChange(e: Event) {
		const checked = (e.target as HTMLInputElement).checked;
		this.selectionChanged.emit({ mail: this.mail, selected: checked });
	}

	// emetto l'evento quando la card viene cliccata
	onCardClick() {
		this.viewMail.emit(this.mail);
	}

}
