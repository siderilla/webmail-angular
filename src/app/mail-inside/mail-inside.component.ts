import { Component, Input, Output } from '@angular/core';
import { MailInsideActionsComponent } from '../mail-inside-actions/mail-inside-actions.component';
import { type Mail } from '../model/mail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mail-inside',
  imports: [MailInsideActionsComponent, DatePipe],
  templateUrl: './mail-inside.component.html',
  styleUrl: './mail-inside.component.scss'
})
export class MailInsideComponent {

	// voglio ricevere il messaggio selezionato per visualizzarlo!
	@Input() selected!: Mail;

}
