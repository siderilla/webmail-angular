import { Component } from '@angular/core';
import { MessageDetail } from '../model/message-detail';
import { ComposeButtonComponent } from '../compose-button/compose-button.component';

@Component({
  selector: 'app-nav-actions',
  imports: [ComposeButtonComponent],
  templateUrl: './nav-actions.component.html',
  styleUrl: './nav-actions.component.scss'
})
export class NavActionsComponent {

	// @Input() messageToDelete: MessageDetail;

}
