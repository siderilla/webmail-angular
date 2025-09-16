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

	messages: MessageDetail[] = [
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

	selectedMessages: MessageDetail[] = [];
	selected?: MessageDetail;

	onSelectionchanged(sel: MessageDetail[]) {
		this.selectedMessages = sel;
		this.selected = sel[sel-length - 1]
		console.log("last selected", this.selected);
		console.log("array selected", this.selectedMessages);
	}

	deleteSelected() {
		this.messages = this.messages.filter(m => !this.selectedMessages.includes(m));
		this.selectedMessages = [];
	}
}
