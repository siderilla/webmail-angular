import { Component, Input, Output } from '@angular/core';
import { MailActionsComponent } from '../mail-actions/mail-actions.component';
import { type MessageDetail } from '../model/message-detail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mail-text',
  imports: [MailActionsComponent, DatePipe],
  templateUrl: './mail-text.component.html',
  styleUrl: './mail-text.component.scss'
})
export class MailTextComponent {

	// voglio ricevere il messaggio selezionato per visualizzarlo!
	@Input() selected!: MessageDetail;

}
