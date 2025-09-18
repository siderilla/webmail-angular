import { Component } from '@angular/core';
import { ComposeButtonComponent } from '../compose-button/compose-button.component';

@Component({
  selector: 'app-sidebar',
  imports: [ComposeButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
