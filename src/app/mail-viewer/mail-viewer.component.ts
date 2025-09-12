import { Component } from '@angular/core';
import { MailTextComponent } from '../mail-text/mail-text.component';
import { MailListComponent } from '../mail-list/mail-list.component';

@Component({
  selector: 'app-mail-viewer',
  imports: [MailTextComponent, MailListComponent],
  templateUrl: './mail-viewer.component.html',
  styleUrl: './mail-viewer.component.scss'
})
export class MailViewerComponent {

}
