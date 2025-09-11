import { Component } from '@angular/core';
import { MailActionsComponent } from '../mail-actions/mail-actions.component';

@Component({
  selector: 'app-mail-viewer',
  imports: [MailActionsComponent],
  templateUrl: './mail-viewer.component.html',
  styleUrl: './mail-viewer.component.scss'
})
export class MailViewerComponent {

}
