import { Component, NgModule } from '@angular/core';
import { NavActionsComponent } from '../nav-actions/nav-actions.component';
import { MailCardComponent } from '../mail-card/mail-card.component';
import { MessageDetail } from '../model/message-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mail-list',
  imports: [NavActionsComponent, MailCardComponent, CommonModule],
  templateUrl: './mail-list.component.html',
  styleUrl: './mail-list.component.scss'
})
export class MailListComponent {

	messages: MessageDetail[] = [
    {
      date: new Date("2025-09-12T09:15:00"),
      from: "alice@example.com",
      subject: "Caffè?",
      body: "Ehi Bob, ci prendiamo un caffè più tardi?"
    },
    {
      date: new Date("2025-09-12T10:30:00"),
      from: "carol@example.com",
      subject: "Meeting aggiornato",
      body: "Il meeting è spostato alle 11:00 in sala A."
    },
    {
      date: new Date("2025-09-12T11:45:00"),
      from: "dave@example.com",
      subject: "Pranzo veloce",
      body: "Ti va un panino veloce al bar sotto?"
    }
  ];

}
