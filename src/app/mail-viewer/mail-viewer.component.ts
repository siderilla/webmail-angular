import { Component } from '@angular/core';
import { MailTextComponent } from '../mail-text/mail-text.component';
import { MailListComponent } from '../mail-list/mail-list.component';
import { type MessageDetail } from '../model/message-detail';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-mail-viewer',
	imports: [MailTextComponent, MailListComponent, CommonModule],
	templateUrl: './mail-viewer.component.html',
	styleUrl: './mail-viewer.component.scss'
})
export class MailViewerComponent {

	// array di messaggi (presto spostare in localStorage):
	messages: MessageDetail[] = [
		{
			date: new Date("2025-09-17"),
			from: "mizora@avernus.com",
			to: "myself@selfmy.com",
			subject: "Maledizioni infernali",
			body: "Ah, mortale. Vedo che hai osato aprire questa missiva. Una scelta... coraggiosa, anche se alquanto avventata. Le maledizioni infernali non sono semplici superstizioni da taverna, ma catene scolpite nel sangue e nel fuoco dei Nove Inferi."
		},
		{
			date: new Date("2025-09-15"),
			from: "shepard@example.com",
			to: "waffle@machine.com",
			subject: "Debriefing",
			body: "Missione terminata. Abbiamo avuto perdite minime, ma la prossima volta servirà più coordinazione. Non possiamo permetterci errori quando la posta in gioco è l'intera galassia."
		},
		{
			date: new Date("2025-09-11"),
			from: "alice@example.com",
			subject: "Caffè?",
			body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum placeat unde quis, pariatur temporibus laudantium beatae eaque voluptas, commodi iste, exercitationem esse dolor aut? Harum vel a repellendus soluta est hic, ut cumque perspiciatis molestias. Dicta enim mollitia ea praesentium deserunt laborum ratione, alias dolore, autem vel nulla quibusdam obcaecati et numquam eligendi? In quia atque quibusdam delectus voluptas eos, facilis similique porro illo quo iusto praesentium quaerat distinctio! Obcaecati distinctio similique quam vel doloribus at reiciendis, hic fuga consequuntur? Quaerat unde fugiat minus pariatur rem sequi quod itaque doloremque numquam, dicta modi eos at porro minima sunt provident?"
		},
		{
			date: new Date("2025-09-13"),
			from: "carol@example.com",
			subject: "Meeting aggiornato",
			body: "Il meeting è spostato alle 11:00 in sala A."
		},
		{
			date: new Date("2025-09-12"),
			from: "zimzimzamzum@example.com",
			subject: "Il titolo pià lungo della storia",
			body: "Zim zam me ne sono accorta oraaaaaaaaaaaaa, sistemare di nuovo mobile ingrombro di tutte le proprietà mail (from, subject, preview...)"
		},
		{
			date: new Date("2025-09-13"),
			from: "muffin@example.com",
			subject: "Pranzo veloce",
			body: "Ti va un panino veloce al bar sotto?"
		},
		{
			date: new Date("2025-09-15"),
			from: "pancake@example.com",
			to: "waffle@machine.com",
			subject: "Li mangio tutti",
			body: "Con burro di arachidi e marmellata, parimpampum"
		}
	];

	// inizializzo l'array che si popola di messaggi selezionati:
	selectedMessages: MessageDetail[] = [];

	// inizializzo la variabile di UN messaggio selezionato
	selected?: MessageDetail;

	// sorting dei messaggi per data (dal più recente al più vecchio)
	sortingMessages(messages: MessageDetail[]) {
		const ordered = messages.sort((a: MessageDetail, b: MessageDetail) => b.date.getTime() - a.date.getTime());
		console.log("ordinato per data: ", ordered);
		return ordered;
	}

	// inizializzo con un messaggio di partenza, l'ultimo arrivato per data e quindi il primo visualizzato nella lista
	ngOnInit() {
		if (this.messages.length > 0) {
			const ordered = this.sortingMessages(this.messages);
			this.selected = ordered[0];
			this.selectedMessages.push(this.selected);
			console.log("messaggio visualizzato di default già presente nell'array in partenza ", this.selectedMessages);
		}
	}

	// quando cambia la selezione prendo dall'array di selezionati l'ultimo messaggio selezionato e lo aggiorno in selected
	onSelectionchanged(sel: MessageDetail[]) {
		this.selectedMessages = sel;
		this.selected = sel[sel.length - 1]; // ultima selezionata
		console.log("array di messaggi selezionati: ", this.selectedMessages);
		console.log("ultimo selezionato: ", this.selected);
	}

	// quando arriva la richiesta di visualizzazione del messaggio, gli passo il messaggio selezionato
	onViewMessage(message: MessageDetail) {
		this.selected = message; // aggiorna subito la mail in visualizzazione
		console.log("messsaggio visualizzato in mail-text: ", message)
	}


	// deleteSelected() {
	// 	this.messages = this.messages.filter(m => !this.selectedMessages.includes(m));
	// 	this.selectedMessages = [];
	// }
}
