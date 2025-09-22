import { Component } from '@angular/core';
import { AccountComponent } from '../header-account/account.component';
import { HeaderLogoMenuComponent } from '../header-logo-menu/header-logo-menu.component';
import { SearchBarComponent } from '../header-search/search-bar.component';

@Component({
  selector: 'app-header-panel',
  imports: [HeaderLogoMenuComponent, 
	SearchBarComponent, 
	AccountComponent],
	
  templateUrl: './header-panel.component.html',
  styleUrl: './header-panel.component.scss'
})
export class HeaderPanelComponent {

}
