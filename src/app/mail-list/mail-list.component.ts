import { Component, NgModule, Input, EventEmitter, Output } from '@angular/core';
import { MailListActionsComponent } from '../mail-list-actions/mail-list-actions.component';
import { MailCardComponent } from '../mail-card/mail-card.component';
import { type Mail } from '../model/mail';
import { CommonModule } from '@angular/common';
import { OutletContext } from '@angular/router';

@Component({
	selector: 'app-mail-list',
	imports: [MailListActionsComponent, MailCardComponent, CommonModule],
	templateUrl: './mail-list.component.html',
	styleUrl: './mail-list.component.scss'
})
export class MailListComponent {

	@Input() selectedMails: Mail[] = [];
	selected?: Mail;

	// ricevo dal parent un array di messaggi
	@Input() mails: Mail[] = [];

	// hey parent guarda che la selezione del messaggio è cambiata!
	@Output() selectionChanged = new EventEmitter<Mail[]>();

	// emetto l'evento quando i messaggi sono selezionati con popolamento dell'array
	onSelected(event: { mail: Mail; selected: boolean }) {
		if (event.selected) {
			this.selectedMails.push(event.mail);
		} else {
			this.selectedMails = this.selectedMails.filter(m => m !== event.mail);
		}
		this.selectionChanged.emit(this.selectedMails);
	}

	// hey parent hanno cliccato sulla card da visualizzare
	@Output() viewMail = new EventEmitter<Mail>();

	// rimbalzo l'evento della card cliccata per esser visualizzata al parent
	onView(mail: Mail) {
		this.selected = mail;
		this.viewMail.emit(mail);
	}

	// ritorna true se il messaggio m è già presente nell'array dei selezionati e quindi se la checkbox deve essere spuntata
	isSelected(m: Mail): boolean {
		return this.selectedMails.includes(m);
	}

	@Output() masterCheckboxChanged = new EventEmitter<boolean>();

	onMasterCheckbox(e: Event) {
		const mailsChecked = (e.target as HTMLInputElement).checked;
		this.masterCheckboxChanged.emit(mailsChecked);
		this.selectionChanged.emit(mailsChecked ? [...this.mails] : []);
	}

}
