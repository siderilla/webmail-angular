import { Component, NgModule, Input } from '@angular/core';
import { NavActionsComponent } from '../nav-actions/nav-actions.component';
import { MailCardComponent } from '../mail-card/mail-card.component';
import { type MessageDetail } from '../model/message-detail';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-mail-list',
	imports: [NavActionsComponent, MailCardComponent, CommonModule],
	templateUrl: './mail-list.component.html',
	styleUrl: './mail-list.component.scss'
})
export class MailListComponent {

	@Input() messages: MessageDetail[] = [];

}
