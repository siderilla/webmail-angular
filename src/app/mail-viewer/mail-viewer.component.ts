import { Component, inject } from '@angular/core';
import { MailDetailComponent } from '../mail-detail/mail-detail.component';
import { MailListComponent } from '../mail-list/mail-list.component';
import { type Mail } from '../model/mail';
import { CommonModule } from '@angular/common';
import { MailService } from '../services/mail.service';

@Component({
	selector: 'app-mail-viewer',
	imports: [MailDetailComponent, MailListComponent, CommonModule],
	templateUrl: './mail-viewer.component.html',
	styleUrl: './mail-viewer.component.scss'
})
export class MailViewerComponent {

	private mailService = inject(MailService);

	mails$ = this.mailService.filteredMails$;
	// filteredMails$ = this.mailService.filteredMails$;

	selectedMails: Mail[] = [];
	selected?: Mail;
	openedMail?: Mail;

	// sortingMailsByDate(mails: Mail[]): Mail[] {
	// 	const ordered = mails.sort((a: Mail, b: Mail) => b.date.getTime() - a.date.getTime());
	// 	console.log("ordinato per data: ", ordered);
	// 	return ordered;
	// }

	// avvio l'app e voglio vedere in detail l'ultima mail arrivata (openedMail) e poi gestisco l'ultima cliccata
	ngOnInit() {
		this.mailService.filteredMails$.subscribe(mails => {
			this.openedMail = mails[0];
			console.log("mail aperta di default è l'ultima", this.openedMail)
			// if (mails.length > 0 && !this.openedMail) {
			// 	const ordered = this.sortingMailsByDate(mails);
			// 	this.openedMail = ordered[0];
			// 	console.log("mail più recente: ", this.openedMail);
			// }
		});
	}

	// quando cambia la selezione prendo dall'array di selezionati l'ultimo messaggio selezionato e lo aggiorno in selected
	onSelectionChanged(sel: Mail[]) {
		this.selectedMails = sel;
		console.log("array di mail selezionate: ", this.selectedMails);
	}

	// quando arriva la richiesta di visualizzazione del messaggio, gli passo il messaggio selezionato
	onViewMail(mail: Mail) {
		this.openedMail = mail;
		console.log("mail visualizzata in mail-detail dopo un click: ", mail)
	}

	onMasterCheckboxChanged(mailsChecked: boolean) {
		console.log(mailsChecked);
	}

	// deleteSelected() {
	// 	this.selectedMails.forEach(m => this.mailService.deleteMail(m));
	// 	this.selectedMails = [];
	// }
}
