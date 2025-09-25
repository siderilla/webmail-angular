import { Component, inject } from '@angular/core';
import { MailInsideComponent } from '../mail-inside/mail-inside.component';
import { MailListComponent } from '../mail-list/mail-list.component';
import { type Mail } from '../model/mail';
import { CommonModule } from '@angular/common';
import { MailService } from '../services/mail.service';

@Component({
	selector: 'app-mail-viewer',
	imports: [MailInsideComponent, MailListComponent, CommonModule],
	templateUrl: './mail-viewer.component.html',
	styleUrl: './mail-viewer.component.scss'
})
export class MailViewerComponent {

	private mailService = inject(MailService);

	mails$ = this.mailService.mails$;

	selectedMails: Mail[] = [];
	selected?: Mail;

	sortingMailsByDate(mails: Mail[]): Mail[] {
		const ordered = mails.sort((a: Mail, b: Mail) => b.date.getTime() - a.date.getTime());
		console.log("ordinato per data: ", ordered);
		return ordered;
	}

	// inizializzo con un messaggio di partenza, l'ultimo arrivato per data e quindi il primo visualizzato nella lista
	ngOnInit() {
		this.mailService.mails$.subscribe(mails => {
			if (mails.length > 0 && !this.selected) {
				this.selected = mails[0];
				this.selectedMails = [this.selected];
			}
		});
	}

	// quando cambia la selezione prendo dall'array di selezionati l'ultimo messaggio selezionato e lo aggiorno in selected
	onSelectionChanged(sel: Mail[]) {
		this.selectedMails = sel;
		this.selected = sel[sel.length - 1]; // ultima selezionata
		console.log("array di mail selezionate: ", this.selectedMails);
		console.log("ultima selezionata: ", this.selected);
	}

	// quando arriva la richiesta di visualizzazione del messaggio, gli passo il messaggio selezionato
	onViewMail(mail: Mail) {
		this.selected = mail;
		console.log("mail visualizzata in mail-text: ", mail)
	}

	onMasterCheckboxChanged(mailsChecked: boolean) {
		console.log(mailsChecked);
	}

	// deleteSelected() {
	// 	this.selectedMails.forEach(m => this.mailService.deleteMail(m));
	// 	this.selectedMails = [];
	// }
}
