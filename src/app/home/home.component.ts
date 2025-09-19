import { Component, inject } from '@angular/core';
import { HeaderPanelComponent } from '../header-panel/header-panel.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MailViewerComponent } from '../mail-viewer/mail-viewer.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	imports: [HeaderPanelComponent, SidebarComponent, MailViewerComponent, CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {

}
