import { Component } from '@angular/core';
import { HeaderPanelComponent } from '../header-panel/header-panel.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MailViewerComponent } from '../mail-viewer/mail-viewer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderPanelComponent, SidebarComponent, MailViewerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
