import { Component, Input, Output } from '@angular/core';
import { MailActionsComponent } from '../mail-actions/mail-actions.component';
import { type MessageDetail } from '../model/message-detail';

@Component({
  selector: 'app-mail-text',
  imports: [MailActionsComponent],
  templateUrl: './mail-text.component.html',
  styleUrl: './mail-text.component.scss'
})
export class MailTextComponent {

	@Input() selected!: MessageDetail;

	@Output() cardSelected = new EventEmitter<{ message: MessageDetail[], selected: boolean }>()

}
