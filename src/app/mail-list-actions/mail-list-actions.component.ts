import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Mail } from '../model/mail';
import { ComposeButtonComponent } from '../compose-button/compose-button.component';
import { CommonModule } from '@angular/common';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-mail-list-actions',
  imports: [ComposeButtonComponent, CommonModule],
  templateUrl: './mail-list-actions.component.html',
  styleUrl: './mail-list-actions.component.scss'
})
export class MailListActionsComponent {

	mailService = inject(MailService)

	@Input() isSelected = false; 

	onDeleteClick() {
		// changefolderrrrtotrassshhhh;
	}



}
