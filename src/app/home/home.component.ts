import { Component } from '@angular/core';
import { HeaderPanelComponent } from '../header-panel/header-panel.component';
import { FolderListComponent } from '../folder-list/folder-list.component';
import { MailListComponent } from '../mail-list/mail-list.component';
import { MailViewerComponent } from '../mail-viewer/mail-viewer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderPanelComponent, FolderListComponent, MailListComponent, MailViewerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
