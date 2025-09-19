import { Component } from '@angular/core';
import { AccountComponent } from '../header-account/account.component';
import { LogoNameComponent } from '../header-logo/logo-name.component';
import { SearchBarComponent } from '../header-search/search-bar.component';

@Component({
  selector: 'app-header-panel',
  imports: [LogoNameComponent, 
	SearchBarComponent, 
	AccountComponent],
	
  templateUrl: './header-panel.component.html',
  styleUrl: './header-panel.component.scss'
})
export class HeaderPanelComponent {

}
