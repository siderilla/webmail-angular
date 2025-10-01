import { Component, Input, Output } from '@angular/core';
import { MailDetailActionsComponent } from '../mail-detail-actions/mail-detail-actions.component';
import { type Mail } from '../model/mail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mail-detail',
  imports: [MailDetailActionsComponent, DatePipe],
  templateUrl: './mail-detail.component.html',
  styleUrl: './mail-detail.component.scss'
})
export class MailDetailComponent {

	// voglio ricevere il messaggio selezionato per visualizzarlo!
	@Input() openedMail!: Mail;

}
