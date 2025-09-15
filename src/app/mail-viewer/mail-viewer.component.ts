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
			body: "Ehi Bob, ci prendiamo un caffè più tardi?"
		},
		{
			date: new Date("2025-09-13"),
			from: "carol@example.com",
			subject: "Meeting aggiornato",
			body: "Il meeting è spostato alle 11:00 in sala A."
		},
		{
			date: new Date("2025-09-12"),
			from: "dave@example.com",
			subject: "Pranzo veloce",
			body: "Ti va un panino veloce al bar sotto?"
		}
	];
}
