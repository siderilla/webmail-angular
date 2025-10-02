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
showActionsButtons() {
throw new Error('Method not implemented.');
}

	selected?: Mail;

	@Input() selectedMails: Mail[] = [];
	@Input() mails: Mail[] = []; // ricevo dal parent un array di mail
	@Input() openedMail?: Mail;

	@Output() selectionChanged = new EventEmitter<Mail[]>(); // hey parent guarda che la selezione della mail è cambiata!
	@Output() viewMail = new EventEmitter<Mail>(); 	// hey parent hanno cliccato sulla card da visualizzare
	@Output() masterCheckboxChanged = new EventEmitter<boolean>(); // click sulla checkbox MASTER

	// emetto l'evento quando le mail sono selezionate con popolamento dell'array
	onSelected(event: { mail: Mail; selected: boolean }) {
		if (event.selected) {
			this.selectedMails.push(event.mail);
		} else {
			this.selectedMails = this.selectedMails.filter(m => m !== event.mail);
		}
		this.selectionChanged.emit(this.selectedMails);
	}

	// rimbalzo l'evento della card cliccata per esser visualizzata al parent
	onView(mail: Mail) {
		this.openedMail = mail;
		this.viewMail.emit(mail);
	}

	onMasterCheckbox(e: Event) {
		const mailsChecked = (e.target as HTMLInputElement).checked;
		this.masterCheckboxChanged.emit(mailsChecked);
		this.selectionChanged.emit(mailsChecked ? [...this.mails] : []);
	}

	// ritorna true se la mail m è già presente nell'array delle selezionate e quindi se la checkbox deve essere spuntata
	isSelected(m: Mail): boolean {
		return this.selectedMails.includes(m);
	}

}
